import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check active sessions and subscribe to auth changes
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                formatAndSetUser(session.user);
            } else {
                setUser(null);
            }
            setLoading(false);
        };

        checkSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                formatAndSetUser(session.user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const formatAndSetUser = (supabaseUser) => {
        // Extract basic info. Supabase user object structure differs slightly based on provider.
        const name = supabaseUser.user_metadata?.full_name || supabaseUser.user_metadata?.name || supabaseUser.email?.split('@')[0];
        const avatar = supabaseUser.user_metadata?.avatar_url || supabaseUser.user_metadata?.picture;

        setUser({
            id: supabaseUser.id,
            email: supabaseUser.email,
            name: name,
            avatar: avatar,
            ...supabaseUser.user_metadata // Spread other metadata just in case
        });
    };

    // Signup with Email/Password
    const signup = async (email, password, name) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: name,
                },
            },
        });
        if (error) throw error;
        return data;
    };

    // Login with Email/Password
    const login = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
        return data;
    };

    // Login with Google
    const loginWithGoogle = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                // Redirect back to this page or home after login
                redirectTo: window.location.origin,
            }
        });
        if (error) throw error;
        return data;
    };



    // Update Profile (Metadata)
    const updateProfile = async (updates) => {
        const { data, error } = await supabase.auth.updateUser({
            data: updates
        });

        if (error) throw error;

        if (data.user) {
            formatAndSetUser(data.user);
        }
        return data;
    };

    // Send Password Reset Email
    const sendPasswordResetEmail = async (email) => {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/update-password`,
        });
        if (error) throw error;
        return data;
    };

    // Update Password (for logged in users or after reset)
    const updatePassword = async (newPassword) => {
        const { data, error } = await supabase.auth.updateUser({
            password: newPassword
        });

        if (error) throw error;
        return data;
    };

    // Logout
    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        setUser(null);
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loginWithGoogle, updateProfile, sendPasswordResetEmail, updatePassword, isAuthenticated, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
