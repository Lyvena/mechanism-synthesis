import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:info@lyvena.xyz" className="text-blue-600 hover:underline">
                info@lyvena.xyz
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>Global</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Support Hours</h3>
              <p>24/7 Online Support</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;