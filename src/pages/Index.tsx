import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Dashboard />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Index;