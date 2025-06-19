import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation
import AppLogo from '@/components/AppLogo'; // Using the AppLogo component
import { Button } from '@/components/ui/button';
import { UserCircle, LogOut, Settings } from 'lucide-react'; // Example icons
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // For user menu

interface SiteHeaderProps {
  logoSrc?: string; // Optional: if logo is passed dynamically
  siteName?: string;
  userName?: string; // To display if user is logged in
  onLogout?: () => void; // Logout handler
}

const SiteHeader: React.FC<SiteHeaderProps> = ({
  logoSrc = "/placeholder.svg", // Default logo if not provided
  siteName = "My Application",
  userName,
  onLogout,
}) => {
  console.log("Rendering SiteHeader, userName:", userName);

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <AppLogo src={logoSrc} alt={`${siteName} Logo`} width={32} height={32} />
          <span className="font-semibold text-lg">{siteName}</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Placeholder for primary navigation items if not using a separate NavigationMenu component directly here */}
          {/* For example: <Link to="/dashboard" className="text-sm font-medium hover:underline">Dashboard</Link> */}

          {userName ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserCircle className="h-6 w-6" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Hi, {userName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/account-settings"> {/* Example link */}
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                {onLogout && (
                  <DropdownMenuItem onClick={onLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;