import { useEffect, useState } from 'react';

import './ScreenTransition.css';

import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const ScreenTransition = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);

    setTimeout(() => {
      setLoading(true);
    }, 500);

    return () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
  });
  return (
    <div className={!loading ? 'wrapper' : 'wrapper after'}>
      <div className={!loading ? 'load' : 'load after2'}>
        <HiOutlineDotsHorizontal />
      </div>
    </div>
  );
};

export default ScreenTransition;
