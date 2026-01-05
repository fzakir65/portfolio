import { certifications } from '@/utils/data/certifications';

export default function Certifications() {
  return (
    <div id="certifications" className="my-12 lg:my-16">
  <h3 className="text-2xl font-semibold mb-6 text-white">Certificate</h3>

      <div className="flex flex-wrap gap-3">
        {certifications.map((c, idx) => (
          <span
            key={idx}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-sm"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
