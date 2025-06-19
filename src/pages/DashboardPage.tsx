import React from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulate logout
    console.log("User logged out");
    toast.success("Logged out successfully!");
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader
        siteName="My Dashboard App"
        userName="Current User" // This should be dynamic in a real app
        onLogout={handleLogout}
        logoSrc="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
      />
      <nav className="bg-gray-100 dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <NavigationMenu className="py-2">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/dashboard">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Overview
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/dashboard/analytics">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Analytics
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/dashboard/reports">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Reports
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/account-settings">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Settings
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8 md:px-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>A brief overview of your activity.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Placeholder for some quick statistics or charts.</p>
              <Button className="mt-4">View Details</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>What's new?</CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                <li>- Item A updated</li>
                <li>- Item B created</li>
                <li>- Item C reviewed</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Notes</CardTitle>
              <CardDescription>Jot down some quick notes.</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea placeholder="Type your notes here..." rows={4} />
              <Button className="mt-2">Save Note</Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="py-4 bg-gray-100 dark:bg-gray-800 border-t text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} My Dashboard App. All rights reserved.
      </footer>
    </div>
  );
};

export default DashboardPage;