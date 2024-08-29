"use client";

import React from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

const Voter = () => {
  return (
    <div>
      <section className="bg-background py-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl">
          <h2 className="text-2xl font-bold mb-4">Voter Dashboard</h2>
          <div className="w-full flex items-center gap-11 flex-wrap">
            <div className="max-w-md">
              <h3 className="text-xl font-medium mb-2">
                Create Voting Profile
              </h3>
              <p className="text-[#1B5E20] mb-4">
                Set up your voting profile using zero-knowledge proofs to
                protect your privacy and ensure secure voting.
              </p>
              <Link href="/voter-dashboard/create-profile">
                <Button className="w-full" variant="outline">
                  Create Profile
                </Button>
              </Link>
            </div>
            <div className="max-w-md">
              <h3 className="text-xl font-medium mb-2">Verify Profile</h3>
              <p className="text-[#1B5E20] mb-4">
                Verify your voting profile using zero-knowledge proofs to
                protect your privacy and ensure secure voting.
              </p>
              <Button className="w-full" onClick={() => {}} variant="secondary">
                Verify Profile
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Voter;
