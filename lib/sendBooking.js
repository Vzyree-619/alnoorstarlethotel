import db from '@/db';
export async function getBookings(maxNumber) {
    let limitClause = '';
    if (maxNumber) {
      limitClause = 'LIMIT ?';
    }
  
    const stmt = db.prepare(`
      SELECT booking.id,firstName,secondName,emailAddress,contactNumber,guests,roomtype, description, checkIn, checkOut user_id
      FROM booking
      
      ${limitClause}`);
  
    return maxNumber ? stmt.all(maxNumber) : stmt.all();
  }
  
  // Function to create a new message
  export async function createBooking(booking){
    let {firstName,secondName,emailAddress,contactNumber,guests,roomtype, description, checkIn,checkOut, user_id} = booking;
    try {
      const stmt = db.prepare(
        `INSERT INTO booking (firstName,secondName,emailAddress,contactNumber,guests,roomtype,description, checkIn, checkOut, user_id)
        VALUES (?,?,?,?,?,?,?,?,?,?)`
      );
      const info = stmt.run(firstName,secondName,emailAddress,contactNumber,guests,roomtype,description, checkIn, checkOut,user_id);
      return info;
    } catch (error){
      console.log( 'Error creating booking:',error)
      throw error;
    }
  }