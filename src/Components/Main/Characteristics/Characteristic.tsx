import { SelectedCharacteristic } from '@/Components/Shared/Types';

type Props = {
  SelectCharacteristic: string;
  setSelectCharacteristic: (value: SelectedCharacteristic) => void;
  characteristic: {
    img: string;
    title: string;
  };
};

const Characteristic = ({ SelectCharacteristic, setSelectCharacteristic, characteristic }: Props) => {
  const lowerCaseCharacteristic = characteristic.title
    .toLowerCase()
    .replace(/\s+/g, '') as SelectedCharacteristic;
  return (
    <div
      onClick={() => setSelectCharacteristic(lowerCaseCharacteristic)}
      className={`${
        SelectCharacteristic === lowerCaseCharacteristic
          ? 'bg-[#6adcff] rounded-ss-[25px] xs:rounded-ss-[50px] sm:rounded-ss-[75px]'
          : 'bg-[#ffffffd1] hover:bg-[#c2f1ff] rounded-lg'
      }  cursor-pointer transition-all rounded-lg flex flex-col items-center gap-4 p-2 xs:p-4 lg:p-10 shadow-md `}
    >
      <img
        className="max-w-[30px] xs:max-w-[50px] md:max-w-[75px] lg:max-w-[60px]"
        src={characteristic.img}
        alt={characteristic.title}
      />
      <p className="text-[10px] font-bold sm:text-sm lg:text-xl">
        {characteristic.title}
      </p>
    </div>
  );
};

export default Characteristic;
