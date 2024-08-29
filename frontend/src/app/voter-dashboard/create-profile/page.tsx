"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { ArrowLeft, VerifiedIcon } from "lucide-react";
import Link from "next/link";

async function verifyUserProfile(userProfile: any) {
  return {};
}

export default function CreateVoterProfilePage() {
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    nin: "",
    age: "",
    state: "",
    lga: "",
    verified: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await verifyUserProfile(userProfile);
      setUserProfile((prev) => ({ ...prev, verified: true }));
    } catch (error) {
      console.error("Error verifying user profile:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      {!userProfile.verified ? (
        <main className="flex-1 flex flex-col xl:flex-row-reverse bg-background text-foreground p-6 gap-6">
          <div className="xl:w-1/2 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-2">
                Steps to Create and Verify Profile
              </h2>
              <ol className="list-decimal list-inside pl-3 space-y-2">
                <li>Fill in your personal details in the form below.</li>
                <li>
                  Click the &ldquo;Verify Profile&rdquo; button to initiate the
                  verification process.
                </li>
                <li>
                  Your wallet will open, and you&quot;ll be prompted to sign a
                  transaction to verify your profile.
                </li>
                <li>
                  Once the transaction is confirmed, your profile will be marked
                  as verified.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Video Explanation</h2>
              <p className="mb-3">
                some random video for now we&quot;ll update this with showing
                users the step to create and verify their profile
              </p>
              <div className="">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Profile Verification Process"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Create and Verify Profile</CardTitle>
                <CardDescription>
                  Fill in your details and click &ldquo;Verify Profile&rdquo; to
                  get started.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={userProfile.name}
                      onChange={(e) =>
                        setUserProfile((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userProfile.email}
                      onChange={(e) =>
                        setUserProfile((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={userProfile.address}
                      onChange={(e) =>
                        setUserProfile((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={userProfile.phone}
                      onChange={(e) =>
                        setUserProfile((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="nin">NIN</Label>
                    <Input
                      id="nin"
                      value={userProfile.nin}
                      onChange={(e) =>
                        setUserProfile((prev) => ({
                          ...prev,
                          nin: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      value={userProfile.age}
                      onChange={(e) =>
                        setUserProfile((prev) => ({
                          ...prev,
                          age: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={userProfile.state}
                      onChange={(e) =>
                        setUserProfile((prev) => ({
                          ...prev,
                          state: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lga">L.G.A.</Label>
                    <Input
                      id="lga"
                      value={userProfile.lga}
                      onChange={(e) =>
                        setUserProfile((prev) => ({
                          ...prev,
                          lga: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isLoading} className="">
                    {isLoading ? "Verifying..." : "Verify Profile"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      ) : (
        <div className="p-6 text-green-500 gap-1 font-medium flex flex-col items-center selection:justify-center text-center w-full">
          <VerifiedIcon className="w-11 h-11" />
          <span className="text-lg">
            Your profile has been successfully submitted!
          </span>
          <Link href="/voter-dashboard">
            <Button className="mt-2" variant="link">
              Back to dashbaord
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
