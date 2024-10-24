import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = React.useState('');

  const handleSaveApiKey = () => {
    if (apiKey) {
      localStorage.setItem('openai_api_key', apiKey);
      toast({
        title: "API Key Saved",
        description: "Your OpenAI API key has been saved successfully.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-2">
            <SettingsIcon className="h-8 w-8" />
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">OpenAI API Configuration</h3>
            <p className="text-sm text-muted-foreground">
              Enter your OpenAI API key to enable AI features in the application.
            </p>
            <div className="flex gap-2">
              <Input
                type="password"
                placeholder="Enter your OpenAI API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <Button onClick={handleSaveApiKey}>Save Key</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;