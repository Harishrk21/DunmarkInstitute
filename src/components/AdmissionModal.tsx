import React, { useEffect, useRef } from 'react';
import { X, GraduationCap, CheckCircle } from 'lucide-react';

const GFORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeSuXjlJX5aQSLDst6wpZd2wVnOzsqcNo1TahChoPOQpFYwqw/viewform?embedded=true';

interface Props {
  open: boolean;
  onClose: () => void;
}

const AdmissionModal: React.FC<Props> = ({ open, onClose }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    setSubmitted(false);
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleSubmitted = () => {
    setSubmitted(true);
    setTimeout(onClose, 2400);
  };

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5"
      onClick={(e) => e.target === backdropRef.current && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md" />

      {/* Modal card */}
      <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
        style={{ maxHeight: '95vh' }}
      >
        {/* Top gradient bar */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 shrink-0" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 shrink-0">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-base sm:text-lg leading-tight">
                Apply to Dunmark Institute
              </h2>
              <p className="text-teal-400 text-xs sm:text-sm">
                Academic Year 2026 — Admissions Open
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 shrink-0 ml-3"
          >
            <X size={17} />
          </button>
        </div>

        {/* Form / Success area */}
        <div className="flex-1 overflow-auto">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 px-6 text-center gap-5">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-xl shadow-teal-500/30">
                <CheckCircle size={38} className="text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold">Application Submitted!</h3>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Thank you for applying to Dunmark Institute of Medical Sciences.
                Our admissions team will reach out to you shortly.
              </p>
              <p className="text-teal-400 text-xs animate-pulse">Closing automatically…</p>
            </div>
          ) : (
            <iframe
              src={GFORM_URL}
              title="Dunmark Institute Admission Form"
              className="w-full"
              style={{ height: 'clamp(480px, 65vh, 720px)', border: 'none', display: 'block' }}
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          )}
        </div>

        {/* Footer */}
        {!submitted && (
          <div className="shrink-0 px-5 sm:px-8 py-4 border-t border-white/10 bg-slate-950/50 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-xs text-center sm:text-left">
              Complete the form above, then click{' '}
              <span className="text-teal-400 font-semibold">Submit Application</span>.
            </p>
            <button
              onClick={handleSubmitted}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-bold py-2.5 px-8 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 text-sm whitespace-nowrap"
            >
              <CheckCircle size={16} className="mr-2 shrink-0" />
              Submit Application
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionModal;
