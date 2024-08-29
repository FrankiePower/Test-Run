import React from "react";
import {
  HomeIcon,
  MountainIcon,
  UserIcon,
  UsersIcon,
  VoteIcon,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <aside className="bg-background border-r w-64 hidden md:block">
        <div className="flex flex-col h-full">
          <div className="h-20 px-6 flex items-center border-b">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold"
              prefetch={false}
            >
              <MountainIcon className="h-6 w-6" />
              <span>zkVote Africa</span>
            </Link>
          </div>
          <nav className="flex-1 py-6">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 px-6 py-2 hover:bg-muted/40 transition-colors"
                  prefetch={false}
                >
                  <HomeIcon className="h-5 w-5" />
                  <span>Overview</span>
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  className="flex items-center gap-3 px-6 py-2 hover:bg-muted/40 transition-colors"
                  prefetch={false}
                >
                  <VoteIcon className="h-5 w-5" />
                  <span>Elections</span>
                </Link>
              </li> */}
              <li>
                <Link
                  href="/community"
                  className="flex items-center gap-3 px-6 py-2 hover:bg-muted/40 transition-colors"
                  prefetch={false}
                >
                  <UsersIcon className="h-5 w-5" />
                  <span>Community</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/voter-dashboard"
                  className="flex items-center gap-3 px-6 py-2 hover:bg-muted/40 transition-colors"
                  prefetch={false}
                >
                  <UserIcon className="h-5 w-5" />
                  <span>Voter Dashboard</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="bottom-0 fixed bg-background border-b w-full block md:hidden">
        <nav className="flex justify-around py-4">
          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs">Overview</span>
          </Link>
          {/* <Link
            href="#"
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <VoteIcon className="h-6 w-6" />
            <span className="text-xs">Elections</span>
          </Link> */}
          <Link
            href="/community"
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <UsersIcon className="h-6 w-6" />
            <span className="text-xs">Community</span>
          </Link>
          <Link
            href="/voter-dashboard"
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <UserIcon className="h-6 w-6" />
            <span className="text-xs">Voter</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
