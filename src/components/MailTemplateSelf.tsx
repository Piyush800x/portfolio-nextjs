import { Inter } from "next/font/google"
import { Html } from "@react-email/components";

export const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export function currTime(): string {
    const currTime = new Date();
    const currOffset = currTime.getTimezoneOffset();
    const istOffset = 330;
    const istTime = new Date(currTime.getTime() + (istOffset + currOffset) * 60000);

    const hoursIST = istTime.getHours()
    const minutesIST = istTime.getMinutes()

    return hoursIST + " : " + minutesIST
}

export function MailTemplateSelf({name, email, phone, project, budget, service}: {name: string, email: string, phone: string, project: string, budget: string, service: string})  {
    return (
        <Html lang="en">
            <div style={{width: '100%', height:"100%", backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <div style={{width: '100%', height: '100%', position: 'relative', background: 'black'}}>
                    <div style={{justifyContent: "center", alignItems: "center"}}>
                        <div style={{width: 564, height: 91, left: 21, top: 20, paddingLeft:"110px", paddingTop: "25px", textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>New Order from {name}, Time: {currTime()}</div>
                        {/* <div style={{width: 440, height: 0, left: 85, top: 124, paddingLeft:"110px", border: '3px white solid'}}></div> */}
                        <div style={{width: 553, height: 84, left: 32, top: 145, paddingLeft:"110px", paddingTop: "25px", textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Name: {name}</div>
                        <div style={{width: 553, height: 84, left: 32, top: 145, paddingLeft:"110px", paddingTop: "10px", textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Phone: {phone}</div>
                        <div style={{width: 553, height: 84, left: 32, top: 145, paddingLeft:"110px", paddingTop: "10px", textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Email: {email}</div>
                        <div style={{width: 553, height: 84, left: 32, top: 145, paddingLeft:"110px", paddingTop: "10px", textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Project: {project}</div>
                        <div style={{width: 553, height: 84, left: 32, top: 145, paddingLeft:"110px", paddingTop: "10px", textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Budget: {budget}</div>
                        <div style={{width: 553, height: 84, left: 32, top: 145, paddingLeft:"110px", paddingTop: "10px", textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Service: {service}</div>
                    </div>
                </div>
            </div>
        </Html>
    );
}