import { StyledDialog } from '@/styles/NBDialog.styles';
import { useEffect, useRef } from 'react';

export interface NBDialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const NBDialog = ({ children, open, onClose }: NBDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    open ? dialogRef.current?.showModal() : dialogRef.current?.close();
  }, [open]);

  const handleDialogClick = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) => {
    if (e.currentTarget.tagName !== 'DIALOG') return;

    const rect = e.currentTarget.getBoundingClientRect();

    const clickedInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (clickedInDialog === false) {
      e.currentTarget.close();
      onClose();
    }
  };

  return (
    <StyledDialog onClick={handleDialogClick} ref={dialogRef}>
      {children}
    </StyledDialog>
  );
};
