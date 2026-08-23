import React, { useEffect, useState } from 'react';

export const LiveClock: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [timeString, setTimeString] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Calculate IST (UTC+5:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
      setTimeString(formatted);

      // Check IST business hours (Mon-Sat 10 AM to 7 PM)
      const istDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const day = istDate.getDay(); // 0 is Sun, 6 is Sat
      const hour = istDate.getHours();
      const open = day !== 0 && hour >= 10 && hour < 19;
      setIsOpen(open);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 text-xs font-tech-mono text-[#8A8A8A]">
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-emerald-400' : 'bg-[#B79B58]'}`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-emerald-500' : 'bg-[#B79B58]'}`} />
        </span>
        <span>IST {timeString || '10:00:00 AM'}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-lg bg-[#141414]/70 border border-white/5 text-xs font-tech-mono">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-emerald-400' : 'bg-[#B79B58]'}`} />
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isOpen ? 'bg-emerald-500' : 'bg-[#B79B58]'}`} />
        </span>
        <span className="text-[#F5F5F2] font-medium">
          {isOpen ? 'STUDIO OPEN' : 'STUDIO RESTING'}
        </span>
      </div>
      <div className="text-[#8A8A8A] hidden sm:inline">|</div>
      <div className="text-[#8A8A8A]">
        INDIA (IST) <span className="text-[#CDB373] ml-1">{timeString || '10:00:00 AM'}</span>
      </div>
      <div className="text-[#8A8A8A] hidden md:inline">|</div>
      <div className="text-[#8A8A8A] text-[11px] hidden md:inline">
        MON–SAT 10AM–7PM IST · WORLDWIDE SYNC
      </div>
    </div>
  );
};
