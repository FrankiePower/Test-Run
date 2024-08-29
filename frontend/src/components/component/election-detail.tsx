import React from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import {
  ArrowRightIcon,
  CalendarIcon,
  MailOpenIcon,
  PercentIcon,
} from "lucide-react";
import { Card } from "@/src/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/ui/avatar";

const ElectionDetail = () => {
  return (
    <section className="bg-background py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Presidential Election</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-2">Election Summary</h3>
            <p className="text-[#1B5E20] mb-4">
              The presidential election is a highly contested race with four
              candidates vying for the top office. The key issues include the
              economy, healthcare, and education.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-[#E8F5E9] text-[#1B5E20]">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">Voter Turnout</h4>
                  <PercentIcon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold mt-2">68%</div>
              </Card>
              <Card className="p-4 bg-[#E8F5E9] text-[#1B5E20]">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">Early Votes</h4>
                  <CalendarIcon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold mt-2">42,356</div>
              </Card>
              <Card className="p-4 bg-[#E8F5E9] text-[#1B5E20]">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">Mail-in Ballots</h4>
                  <MailOpenIcon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold mt-2">28,912</div>
              </Card>
              <Card className="p-4 bg-[#E8F5E9] text-[#1B5E20]">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">Key Dates</h4>
                  <CalendarIcon className="w-6 h-6" />
                </div>
                <div className="mt-2">
                  <div className="flex items-center justify-between">
                    <span>Early Voting Begins</span>
                    <span>Oct 15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Election Day</span>
                    <span>Nov 8</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Candidate Profiles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-[#E8F5E9] text-[#1B5E20]">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Candidate" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-medium">John Doe</h4>
                    <p className="text-sm text-[#1B5E20]">
                      Independent Candidate
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-[#1B5E20]">
                    John Doe is an independent candidate with a focus on
                    government transparency and fiscal responsibility.
                  </p>
                  <Link
                    href="#"
                    className="text-[#4CAF50] font-medium mt-2 inline-block"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </Card>
              <Card className="p-4 bg-[#E8F5E9] text-[#1B5E20]">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Candidate" />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-medium">Jane Appleseed</h4>
                    <p className="text-sm text-[#1B5E20]">
                      Democratic Candidate
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-[#1B5E20]">
                    Jane Appleseed is the Democratic candidate with a focus on
                    education reform and environmental protection.
                  </p>
                  <Link
                    href="#"
                    className="text-[#4CAF50] font-medium mt-2 inline-block"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </Card>
              <Card className="p-4 bg-[#E8F5E9] text-[#1B5E20]">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Candidate" />
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-medium">Robert Martinez</h4>
                    <p className="text-sm text-[#1B5E20]">
                      Republican Candidate
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-[#1B5E20]">
                    Robert Martinez is the Republican candidate with a focus on
                    economic growth and job creation.
                  </p>
                  <Link
                    href="#"
                    className="text-[#4CAF50] font-medium mt-2 inline-block"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </Card>
              <Card className="p-4 bg-[#E8F5E9] text-[#1B5E20]">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Candidate" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-medium">Sarah Anderson</h4>
                    <p className="text-sm text-[#1B5E20]">
                      Green Party Candidate
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-[#1B5E20]">
                    Sarah Anderson is the Green Party candidate with a focus on
                    environmental sustainability and social justice.
                  </p>
                  <Link
                    href="#"
                    className="text-[#4CAF50] font-medium mt-2 inline-block"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-2">Latest Comments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="p-4 bg-[#E8F5E9] text-[#1B5E20]">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-medium">John Doe</h4>
                  <p className="text-sm text-[#1B5E20]">
                    &ldquo;I&quot;m excited to see the candidates&apos;
                    platforms and make an&#34; informed decision.&rdquo;
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-[#E8F5E9] text-[#1B5E20]">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-medium">Sarah Anderson</h4>
                  <p className="text-sm text-[#1B5E20]">
                    &ldquo;I&quot;m looking forward to a fair and transparent
                    election&#34; process.&rdquo;
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/community"
              className="inline-flex items-center gap-2 text-[#4CAF50] font-medium hover:underline transition"
              prefetch={false}
            >
              View More Comments
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button className="w-full max-w-md mx-auto">Vote Now</Button>
        </div>
      </div>
    </section>
  );
};

export default ElectionDetail;
