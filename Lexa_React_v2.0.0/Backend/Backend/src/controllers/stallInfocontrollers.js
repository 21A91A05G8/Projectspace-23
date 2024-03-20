const stallsInfo = require("../../models/stallsInfo.js");
const fs = require("fs");


const addStallsInfo = async (req, res) => {
  // console.log("testing")
  // console.log(req.body);
  const stallagreement=(req.file)? req.file.filename:null
  const { stallName, stallArea, stallId, stallmobileNumber,stallrentPerMonth} = req.body
  const stallData = await stallsInfo({
      
      stallName,
      stallArea,
      stallId,
      stallmobileNumber,
      stallrentPerMonth,
      stallagreement,
  });
    try {
        let stalldata = stallData.save();
        res.status(200).json({ message: "Data Received", stalldata });
    } catch (error) {
        res.status(500).json({ message: "Data not Received" });
    }
  }

    //Get All users data
    const getStallsInfo = async (req, res) => {
        let result;
        try{
            result = await stallsInfo.find();
            console.log(result);
            return res.send(result);
        }catch(err){
            return console.log(err)
        }
        if(!stallsInfo){
            return res.status(400).json({message:"No Users Found."})
        }
        return res.status(201).json({stallsInfo})
        
      }
      const deleteStallsInfo = async (req, res, next) => {
        const _id = req.params.id;
        // console.log(user_ID)
        await stallsInfo.findByIdAndDelete(_id)
        .then(() => {
        res.status(200).json({ message: "User data deleted succeffully"});
        console.log("data deleted succeffully");
        })
        .catch((er) => {
        res.status(400).json({ message: "user data not deleted" });
        console.log(er);
        });
        };
        const updateStallsInfo = async (req, res, next) => {
          const _id = req.params.id;
          console.log(req.body);
          let user = await shopsInfo.findByIdAndUpdate(_id, req.body);
          user = await user
          .save()
          .then(() => {
          console.log("updated");
          return res.status(200).json({ message: "User updated successfully" });
          })
          .catch((er) => {
          console.log(er);
          return res.status(400).json({ message: "User not updated" });
          });
          };
          const getSingleUser = async (req, res, next) => {
            const _id = req.params.id;
            await UserData.findById(_id)
            .then((response) => {
            res.status(200).json({msg:"successfully fetched single data",response});
            })
            .catch((error) => console.log(error));
            };

      //Stalls_Info
    
      exports.addStallsInfo = addStallsInfo;
      exports.getStallsInfo = getStallsInfo;
      exports.deleteStallsInfo=deleteStallsInfo;
      exports.updateStallsInfo =updateStallsInfo;
      exports.getSingleUser=getSingleUser;