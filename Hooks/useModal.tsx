import React, { useState, useCallback } from 'react';

type _tUseModal = [boolean, () => void, () => void];

const useModal = (): _tUseModal => {
  const [openFlag, setOpenFlag] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setOpenFlag(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenFlag(false);
  }, []);

  return [openFlag, handleOpenModal, handleCloseModal];
};

export default useModal;
