import { Card } from "@/src/components/ui/card";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="text-white">
        <div className="bg-[#4CAF50] w-full py-12 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to zkVote Africa
            </h1>
            <p className="text-lg mb-8">
              Secure and transparent elections powered by zero-knowledge proofs.
            </p>
          </div>
        </div>
        <div className="max-w-6xl p-6 md:py-12 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-black/80">
                Current Elections
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-4 bg-transparent border text-[#1B5E20]">
                  <h3 className="text-lg font-medium">Presidential Election</h3>
                  <p className="text-sm text-[#1B5E20] mt-2">
                    Voting period: Oct 15 - Nov 8
                  </p>
                  <Link
                    href="/election/presidential-election"
                    className="text-[#4CAF50] font-medium mt-4 inline-block hover:underline transition"
                    prefetch={false}
                  >
                    <Button
                      variant="outline"
                      className="hover:bg-[#4CAF50] hover:text-white transition"
                    >
                      View Election
                    </Button>
                  </Link>
                </Card>
                <Card className="p-4 bg-transparent border text-[#1B5E20]">
                  <h3 className="text-lg font-medium">
                    Gubernatorial Election
                  </h3>
                  <p className="text-sm text-[#1B5E20] mt-2">
                    Voting period: Nov 1 - Nov 15
                  </p>
                  <Link
                    href="/election/gubernatorial-election"
                    className="text-[#4CAF50] font-medium mt-4 inline-block hover:underline transition"
                    prefetch={false}
                  >
                    <Button
                      variant="outline"
                      className="hover:bg-[#4CAF50] hover:text-white transition"
                    >
                      View Election
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-black/80">
                Upcoming Elections
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-4 bg-transparent border text-[#1B5E20]">
                  <h3 className="text-lg font-medium">Senate Election</h3>
                  <p className="text-sm text-[#1B5E20] mt-2">
                    Voting period: Dec 1 - Dec 15
                  </p>
                  <Link
                    href="#"
                    className="text-[#4CAF50] font-medium mt-4 inline-block hover:underline transition"
                    prefetch={false}
                  >
                    <Button
                      variant="outline"
                      className="hover:bg-[#4CAF50] hover:text-white transition"
                    >
                      View Election
                    </Button>
                  </Link>
                </Card>
                <Card className="p-4 bg-transparent border text-[#1B5E20]">
                  <h3 className="text-lg font-medium">Local Elections</h3>
                  <p className="text-sm text-[#1B5E20] mt-2">
                    Voting period: Jan 1 - Jan 15
                  </p>
                  <Link
                    href="#"
                    className="text-[#4CAF50] font-medium mt-4 inline-block hover:underline transition"
                    prefetch={false}
                  >
                    <Button
                      variant="outline"
                      className="hover:bg-[#4CAF50] hover:text-white transition"
                    >
                      View Election
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-11 text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-white bg-[#4CAF50] font-medium py-2 px-4 rounded-md hover:opacity-90"
              prefetch={false}
            >
              <PlusIcon className="w-4 h-4" />
              Create an Election
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
