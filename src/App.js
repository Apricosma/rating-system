import './App.css';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import { useState } from 'react';

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialog = () => {
    setDialogOpen(true);
  }

  const handleCloseDialog = () => {
    setDialogOpen(false);
  }

  return (
    <div>
      <StarRating />
        <button className='open-dialog-button' onClick={handleDialog}>Open Dialog</button>
      <Dialog isOpen={dialogOpen} onClose={handleCloseDialog} />
    </div>
  );
}

export default App;
