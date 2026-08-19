import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const { slices } = await searchParams;
  const resolvedSlices = getSlices(slices);

  return (
    <SliceSimulator>
      <SliceZone slices={resolvedSlices} components={components} />
    </SliceSimulator>
  );
}