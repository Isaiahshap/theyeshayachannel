import './App.css'; // Import general styles

function FunStuff() {
  return (

  <>
    <div id="bg" style={{
      display: 'flex', // Use flexbox to align children
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      position: 'relative', // Set the container to relative
      height: '100vh', // Ensure full viewport height
      width: '100vw',
      zIndex: 11, // Ensure full viewport width
    }}>
      {/* Image centered within the div */}
      <img 
        src="aol.gif" 
        className='Aolpic' 
        alt="Click here!" 
        width="302" 
        height="249" 
        style={{
          position: 'relative',
          zIndex: 9999 // Very high z-index
        }}
      />
      {/* Other content can go here */}
    </div>
    </>
  );
}

export default FunStuff;
