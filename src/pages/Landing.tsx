import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Shield, Users, Brain, Sparkles, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <main className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-6xl font-bold text-primary">
            Welcome to <span className="text-blue-600">AI-PGF</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering AI projects through decentralized funding and community-driven support.
            Join us in shaping the future of artificial intelligence.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/auth">
              <Button size="lg" className="group">
                Get Started 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 border rounded-lg text-center space-y-4 bg-card hover:shadow-lg transition-all"
          >
            <Brain className="w-12 h-12 mx-auto text-blue-500" />
            <h3 className="text-xl font-semibold">AI Integration</h3>
            <p className="text-gray-600">Leverage advanced AI capabilities for project analysis and insights</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 border rounded-lg text-center space-y-4 bg-card hover:shadow-lg transition-all"
          >
            <Users className="w-12 h-12 mx-auto text-green-500" />
            <h3 className="text-xl font-semibold">Community Support</h3>
            <p className="text-gray-600">Connect with like-minded individuals and grow together</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 border rounded-lg text-center space-y-4 bg-card hover:shadow-lg transition-all"
          >
            <Shield className="w-12 h-12 mx-auto text-purple-500" />
            <h3 className="text-xl font-semibold">Secure Funding</h3>
            <p className="text-gray-600">Safe and transparent funding process for your AI projects</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
            <Sparkles className="text-yellow-500" />
            AI-Powered Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg text-left space-y-2">
              <Bot className="w-8 h-8 text-blue-500" />
              <h3 className="text-lg font-semibold">Smart Project Analysis</h3>
              <p className="text-gray-600">AI-driven insights to help evaluate project potential and risks</p>
            </div>
            <div className="p-6 border rounded-lg text-left space-y-2">
              <Rocket className="w-8 h-8 text-green-500" />
              <h3 className="text-lg font-semibold">Automated Recommendations</h3>
              <p className="text-gray-600">Get personalized project suggestions based on your interests</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Landing;