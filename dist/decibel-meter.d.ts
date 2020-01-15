export default class DecibelMeter {
  constructor(name: string);

  listenTo(
    deviceNumber: number,
    callback: (dB: number, percent: number, value: number) => void
  );

  disconnect: () => void;
}
