import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { Button } from '@/components/ui/button'
import { useWriteContract, useReadContract } from 'wagmi'
import { ABI, ADDRESS } from '@/constants'

 
const Home: NextPage = () => {

  const { writeContract } = useWriteContract();
  const { data: count, refetch } = useReadContract({
    abi: ABI,
    address: ADDRESS,
    functionName: 'getCount'
  })

  return (
    <div className="">

      <div className="flex justify-between ml-5 mr-5 mt-5">
        <h1 className="text-3xl font-semibold">Counter App</h1>
        <ConnectButton />
      </div>

      <div> 
        <div className="w-full h-[2px] bg-gray-200 mt-5" />
      </div>
      <div className="flex flex-col items-center justify-center space-x-3 mt-10">
        <div className="flex space-x-3 mb-3">

          <Button
          onClick={() =>
            writeContract({
              abi: ABI,
              address: ADDRESS,
              functionName: 'increment'
            })
          }>
            Increment</Button>

            <Button
          onClick={() =>
            writeContract({
              abi: ABI,
              address: ADDRESS,
              functionName: 'decrement'
            })
          }>
            Decrement</Button>

            <div>
              <Button
              onClick={() => refetch()}
              >Get Count</Button>
            </div>
          </div>

          <div className="text-xl font-medium">
            Current count: {count?.toString()}
          </div>

      </div>

    </div>
  );
};

export default Home;
