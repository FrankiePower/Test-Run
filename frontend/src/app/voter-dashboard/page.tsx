import Voter from "@/src/components/component/voter";
import { SendTransaction } from '@/src/components/contract/send-transaction';
import React from "react";

const VoterDashboard = () => {
  return (
    <div>
      <Voter />
      <SendTransaction/>
    </div>
  );
};

export default VoterDashboard;
