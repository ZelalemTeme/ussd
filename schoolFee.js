/**
 * Fetch school fee details by student ID---------------------------------------------------------------------------------------
 */
var exports = module.exports = {}
const configs = require("../conf.d")
, server = require("../ussd")
, moment = require('moment')
, serverConfig = configs.getServerConfig()
, intel = configs.apiConfig()
, axios = require('axios')
, ussd = server.init(serverConfig)
, appServer =ussd.app
, log =ussd.log
, http =ussd.http

//-------------------------------------------------------------------------------------------------------------------------------
exports.schoolDetail= async function( msg){
   
    let data = { 
        "Id": msg,  
        "Name": msg, 
        "Address ": msg, 
      } ;
      console.log(data);
        let config = {
    method: 'post',
         maxBodyLength: Infinity,
        url: intel.schoolFee,
        headers: { 
            'Accept-Type': 'application/json',
            "X-API-Key":"a1b2c3d4-1234-5678-9abc-def123456789",
            "X-Client-Id":"client_a"
          },
          
                    data : data
           };	
    try {
                    var schoolFeeResponse = await axios(config)
                    .then(function (response) {
                        console.log(response);
                        if(response.status ===200){
                            return {'schoolDetail':response.data }
                        }else  return {'schoolDetail': null}
                    }).catch(function (error) {
                        console.log(error);
                        return {'errorCode': 2,'schoolDetail': null}
                    });
        return schoolDetailResponse
    }catch (error) {
        return {'errorCode': null,'schoolDetail': null}
    }
} 
//-------------------------------------------------------------------------------------------------------------------------------

exports.schoolBranchDetail= async function( msg){
   
    let data = {
        "School_Id": msg,
     } ;
      console.log(data);
        let config = {
    method: 'post',
         maxBodyLength: Infinity,
        url: intel.schoolBranchDetail,
        headers: { 
            'Content-Type': 'application/json',
            "secret_key":"AUbfMiAyGkajI3",
            "customer_id":"INHSF"
          },
          
                    data : data
           };	
    try {
                    var schoolBranchDetailResponse = await axios(config)
                    .then(function (response) {
                        console.log(response);
                        if(response.status ===200){
                            return {'schoolBranchDetail':response.data }
                        }else  return {'schoolBranchDetail': null}
                    }).catch(function (error) {
                        console.log(error);
                        return {'errorCode': 2,'schoolBranchDetail': null}
                    });
        return schoolBranchDetailResponse
    }catch (error) {
        return {'errorCode': null,'schoolBranchDetail': null}
    }
} 
//-------------------------------------------------------------------------------------------------------------------------------
exports.schoolFee= async function( msg){
   
    let data = {
        "studentId": msg,
     } ;
      console.log(data);
        let config = {
    method: 'post',
         maxBodyLength: Infinity,
        url: intel.schoolFee,
        headers: { 
            'Content-Type': 'application/json',
            "secret_key":"AUbfMiAyGkajI3",
            "customer_id":"INHSF"
          },
          
                    data : data
           };	
    try {
                    var schoolFeeResponse = await axios(config)
                    .then(function (response) {
                        console.log(response);
                        if(response.status ===200){
                            return {'schoolFee':response.data }
                        }else  return {'schoolFee': null}
                    }).catch(function (error) {
                        console.log(error);
                        return {'errorCode': 2,'schoolFee': null}
                    });
        return schoolFeeResponse
    }catch (error) {
        return {'errorCode': null,'schoolFee': null}
    }
} 

//-------------------------------------------------------------------------------------------------------------------------------
exports.schoolFeePay= async function(request_id,amount,debitorAccount){
    let data = JSON.stringify({
        "request_id": request_id ,
        "amount": amount ,
        "debitorAccount": debitorAccount ,

      });
      console.log(data);
        let config = {
    method: 'post',
        maxBodyLength: Infinity,
        url: intel.schoolFeePay,
        headers: { 
            'Content-Type': 'application/json',
            "secret_key":"AUbfMiAyGkajI3",
            "customer_id":"INHSF"
          },
                    data : data
           };	
    try {
                    var schoolFeeResponse = await axios(config)
                    .then(function (response) {
                        console.log(response);
                            return response
                    }).catch(function (error) {
                        console.log(error);
                        return {'schoolFee': null}
                    });
        return schoolFeeResponse
    }catch (error) {
        return {'errorCode': null,'schoolFee': null}
    }
} 

//writen by Zelalem Temesgen Shitu-----------------------------------------------------------------------------------------------


