import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Shield, Users } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl font-bold text-primary">Welcome to AI-PGF</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering AI projects through decentralized funding and community-driven support.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/auth">
              <Button size="lg">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 border rounded-lg text-center space-y-4">
            <Rocket className="w-12 h-12 mx-auto text-primary" />
            <h3 className="text-xl font-semibold">Launch Projects</h3>
            <p className="text-gray-600">Start your AI project and get the funding you need</p>
          </div>
          <div className="p-6 border rounded-lg text-center space-y-4">
            <Users className="w-12 h-12 mx-auto text-primary" />
            <h3 className="text-xl font-semibold">Community Support</h3>
            <p className="text-gray-600">Connect with like-minded individuals</p>
          </div>
          <div className="p-6 border rounded-lg text-center space-y-4">
            <Shield className="w-12 h-12 mx-auto text-primary" />
            <h3 className="text-xl font-semibold">Secure Funding</h3>
            <p className="text-gray-600">Safe and transparent funding process</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;