import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";


const Home = () => {

    const checkoutHandler = async (amount) => {
        
        const {data:{key}}=await axios.get("https://real-gray-pantyhose.cyclic.app/api/getkey")
    
        const { data:{order}} = await axios.post("https://real-gray-pantyhose.cyclic.app/api/checkout", {
            amount
        })
        



        const options = {
            key, 
            amount: order.amount, 
            currency: "INR",
            name: "6 package programmer",
            description: "RazorPay",
            image: "https://tse2.mm.bing.net/th?id=OIP.IC0G4H4vIMkvlQX_lRKcQgHaEo&pid=Api&P=0",
            order_id: order.id, 
            callback_url: "https://real-gray-pantyhose.cyclic.app/api/paymentverification",
            prefill: {
                name: "venkadesh",
                email: "venkijohn66@gmail.com",
                contact: "7548850887"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#292928"
            }
        };
      
        const razor = new window.Razorpay(options)
        razor.open()
}

    return (
        <div>
            <h1><b>Amazon</b></h1>  
            <Box>
          
                <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["row","column"]}>
                    <Card amount={50000} img={"https://tse3.mm.bing.net/th?id=OIP.46YisH8OE645RjJh4W2jFgHaHa&pid=Api&P=0"} checkoutHandler={checkoutHandler} />
                    <Card amount={39999} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />
                </Stack>
           </Box>
        </div>
    )
};

export default Home