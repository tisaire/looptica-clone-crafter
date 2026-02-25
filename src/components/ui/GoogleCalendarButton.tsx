
import React from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import { Calendar as CalendarIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/components/ui/use-toast";

interface GoogleCalendarButtonProps extends Omit<ButtonProps, 'onClick'> {
  subject?: string;
  description?: string;
  location?: string;
  durationMinutes?: number;
}

const GoogleCalendarButton = ({
  subject = 'Looptica Consultation',
  description = 'Appointment at Looptica for services',
  location = 'Looptica, Costa Brava, Spain',
  durationMinutes = 60,
  className,
  children,
  ...props
}: GoogleCalendarButtonProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleAppointmentClick = () => {
    try {
      // Track event
      window.gtag?.('event', 'demana_cita_click', {
        location: window.location.pathname,
        subject: subject
      });
      window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1X2ujdqOmHen2LFMc3Ki4s-Vx6l7uZapLzO6jrbmdMMxLr2RxC_PZKluTKrCqgrHUEGnbF62NO', '_blank');
      
      // Show toast
      toast({
        title: t('appointmentScheduled'),
        description: t('calendarOpened'),
      });
    } catch (error) {
      console.error('Error opening Google Calendar link:', error);
      toast({
        title: t('errorScheduling'),
        description: t('tryAgainLater'),
        variant: "destructive"
      });
    }
  };

  return (
    <Button 
      onClick={handleAppointmentClick}
      className={`bg-[#55afa9] hover:bg-[#ca6664] text-white transition-colors ${className}`}
      {...props}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {children || t('scheduleConsultation')}
    </Button>
  );
};

export default GoogleCalendarButton;
