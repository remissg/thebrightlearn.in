import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lock, Check, Loader, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const { updatePassword } = useAuth();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });

        if (password !== confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match.' });
            return;
        }

        if (password.length < 6) {
            setMessage({ type: 'error', text: 'Password must be at least 6 characters.' });
            return;
        }

        setLoading(true);

        try {
            await updatePassword(password);
            setSubmitted(true);
            setMessage({ type: 'success', text: 'Password updated successfully!' });
            // Optional: Redirect after a few seconds
            setTimeout(() => {
                navigate('/');
            }, 3000);

        } catch (error) {
            console.error(error);
            setMessage({ type: 'error', text: 'Failed to update password. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="font-sans pt-16 min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Set New Password</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Enter your new password below.
                        </p>
                    </div>

                    {!submitted ? (
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            {message.text && (
                                <div className={`p-3 rounded-lg text-sm ${message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                                    {message.text}
                                </div>
                            )}

                            <div className="space-y-4">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm transition-all"
                                        placeholder="New Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        minLength={6}
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm transition-all"
                                        placeholder="Confirm New Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        minLength={6}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'} transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                                >
                                    {loading ? (
                                        <Loader className="h-5 w-5 animate-spin" />
                                    ) : (
                                        'Update Password'
                                    )}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center py-8">
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                                <CheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Password Updated!</h3>
                            <p className="text-gray-500 mb-6">
                                Your password has been successfully changed.
                            </p>
                            <Link to="/" className="text-primary font-bold hover:underline">
                                Go to Home
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UpdatePassword;
