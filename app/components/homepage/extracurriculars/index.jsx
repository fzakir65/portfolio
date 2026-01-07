import { extracurriculars } from '@/utils/data/extracurriculars';
import GlowCard from '../../helper/glow-card';

export default function Extracurriculars(){
  return (
    <div id="extracurriculars" className="my-12 lg:my-24">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Extra Curricular Activity
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {extracurriculars.map(item => (
          <GlowCard key={item.id} identifier={`extra-${item.id}`}>
            <div className="p-4">
              <p className="text-sm text-[#16f2b3]">{item.duration}</p>
              <p className="text-lg font-medium uppercase mt-2">{item.title}</p>
              <p className="text-sm mt-1">{item.organisation}</p>
              <ul className="list-disc ml-5 mt-2 text-sm">
                {item.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
