"use client";

import { useState, useMemo } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/src/components/ui/select";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";
import { Card, CardHeader, CardContent } from "@/src/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";

export default function Discuss() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      content: "This election is a mess!",
      election: "2024 Presidential Election",
      createdAt: "2023-08-19T12:00:00Z",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "I'm excited to see the results of the mayoral race.",
      election: "2023 Mayoral Election",
      createdAt: "2023-08-18T15:30:00Z",
    },
    {
      id: 3,
      author: "Bob Johnson",
      content: "The city council candidates all have great platforms.",
      election: "2023 City Council Election",
      createdAt: "2023-08-17T09:45:00Z",
    },
    {
      id: 4,
      author: "Sarah Lee",
      content: "I can't wait to vote in the upcoming gubernatorial election.",
      election: "2024 Gubernatorial Election",
      createdAt: "2023-08-16T18:20:00Z",
    },
  ]);
  const [sortBy, setSortBy] = useState("relevant");
  const [selectedElection, setSelectedElection] = useState("");
  const filteredComments = useMemo(() => {
    let filtered = comments;
    if (selectedElection) {
      filtered = filtered.filter(
        (comment) => comment.election === selectedElection
      );
    }
    if (sortBy === "latest") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (sortBy === "relevant") {
      filtered = filtered.sort((a, b) => b.id - a.id);
    }
    return filtered;
  }, [comments, sortBy, selectedElection]);
  const elections = useMemo(() => {
    return Array.from(new Set(comments.map((comment) => comment.election)));
  }, [comments]);
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Election Comments</h1>
      </header>
      <div className="flex-1 flex flex-col md:flex-row bg-background text-foreground p-6">
        <div className="md:w-1/4 space-y-4">
          <div>
            <label htmlFor="sort-by" className="block text-sm font-medium">
              Sort by:
            </label>
            <Select
              value={sortBy}
              onValueChange={(value: any) => setSortBy(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select sort option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevant">Most Relevant</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="election" className="block text-sm font-medium">
              Filter by election:
            </label>
            <Select
              value={selectedElection || "all"}
              onValueChange={(value) =>
                setSelectedElection(value === "all" ? "" : value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select election" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {elections.map((election) => (
                  <SelectItem key={election} value={election}>
                    {election}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div className="bg-muted rounded-md p-4">
            <h2 className="text-lg font-bold mb-2">Add a Comment</h2>
            <form className="flex gap-2">
              <Textarea
                placeholder="Share your thoughts..."
                className="flex-1"
              />
              <Select
                value={selectedElection || ""}
                onValueChange={(value) => setSelectedElection(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select election" />
                </SelectTrigger>
                <SelectContent className="w-40">
                  {elections.map((election) => (
                    <SelectItem key={election} value={election}>
                      {election}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button>Post</Button>
            </form>
          </div>
          <div className="space-y-4">
            {filteredComments.map((comment) => (
              <Card key={comment.id}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt={comment.author}
                      />
                      <AvatarFallback>
                        {comment.author.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{comment.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(comment.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">{comment.election}</Badge>
                </CardHeader>
                <CardContent>
                  <p>{comment.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
