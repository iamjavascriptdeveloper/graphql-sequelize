import {
    Room, 
    RoomCategory,
    RoomHeight,
    RoomProduct,
    RoomProductDetail
  } from "../../../../db/models/shiyousho"

const roomQueries = {
    Room: async (_, args) => {
        const room = await Room.findOne({
          include: [
            {
              model: RoomCategory
            },
            {
              model: RoomHeight,
              include: [
                {
                  model: RoomProduct,
                  include: [
                    {
                      model: RoomProductDetail
                      
                    }
                  ],
            
                }
              ]
            }
          ]
        })
    
        return room
      },
    
      Rooms: async (_, args) => {
        const rooms = await Room.findAll({
          include: [
            {
              model: RoomCategory
            }
          ]
        })
    
        return rooms
      },
}

export default roomQueries