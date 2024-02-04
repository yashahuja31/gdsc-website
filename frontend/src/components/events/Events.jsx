import "./Events.css"
import {Chrono} from "react-chrono";
import {useEffect, useState} from "react";
import axios from "axios";

const mockdata = [
    {
        timestamp: '1706443759000',
        name: 'Konklab',
        eventUrl: 'http://bigcartel.com/elementum.png?volutpat=rutrum&dui=rutrum&maecenas=neque&tristique=aenean&est=auctor&et=gravida&tempus=sem&semper=praesent&est=id&quam=massa&pharetra=id&magna=nisl&ac=venenatis&consequat=lacinia&metus=aenean&sapien=sit&ut=amet&nunc=justo&vestibulum=morbi&ante=ut&ipsum=odio&primis=cras&in=mi&faucibus=pede&orci=malesuada&luctus=in&et=imperdiet&ultrices=et&posuere=commodo&cubilia=vulputate&curae=justo&mauris=in&viverra=blandit&diam=ultrices&vitae=enim&quam=lorem&suspendisse=ipsum&potenti=dolor&nullam=sit&porttitor=amet&lacus=consectetuer&at=adipiscing&turpis=elit&donec=proin&posuere=interdum&metus=mauris&vitae=non&ipsum=ligula&aliquam=pellentesque&non=ultrices&mauris=phasellus&morbi=id&non=sapien&lectus=in&aliquam=sapien&sit=iaculis&amet=congue&diam=vivamus&in=metus&magna=arcu&bibendum=adipiscing&imperdiet=molestie&nullam=hendrerit&orci=at&pede=vulputate&venenatis=vitae&non=nisl&sodales=aenean&sed=lectus',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n' +
            '\n' +
            'In congue. Etiam justo. Etiam pretium iaculis justo.',
        imageUrls: [
            'https://picsum.photos/seed/7OlUzeunPa/800/300',
            'https://picsum.photos/seed/9J8riWH7Cs/200/300',
            'https://picsum.photos/seed/2A4FE94Rzk/200/300'
        ]
    },
    {
        timestamp: '1705648286000',
        name: 'Gembucket',
        eventUrl: 'https://senate.gov/in/ante/vestibulum/ante/ipsum.jpg?semper=vel&porta=sem&volutpat=sed&quam=sagittis&pede=nam&lobortis=congue&ligula=risus&sit=semper&amet=porta&eleifend=volutpat&pede=quam&libero=pede&quis=lobortis&orci=ligula&nullam=sit&molestie=amet&nibh=eleifend&in=pede&lectus=libero&pellentesque=quis&at=orci&nulla=nullam&suspendisse=molestie&potenti=nibh&cras=in&in=lectus&purus=pellentesque&eu=at&magna=nulla&vulputate=suspendisse&luctus=potenti&cum=cras&sociis=in&natoque=purus&penatibus=eu&et=magna&magnis=vulputate&dis=luctus&parturient=cum&montes=sociis&nascetur=natoque&ridiculus=penatibus&mus=et&vivamus=magnis&vestibulum=dis&sagittis=parturient&sapien=montes&cum=nascetur&sociis=ridiculus&natoque=mus&penatibus=vivamus&et=vestibulum&magnis=sagittis&dis=sapien&parturient=cum&montes=sociis&nascetur=natoque&ridiculus=penatibus&mus=et&etiam=magnis&vel=dis&augue=parturient&vestibulum=montes&rutrum=nascetur&rutrum=ridiculus&neque=mus&aenean=etiam&auctor=vel&gravida=augue&sem=vestibulum&praesent=rutrum&id=rutrum&massa=neque&id=aenean&nisl=auctor',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        imageUrls: [
            'https://picsum.photos/seed/T4s5D5Sis9/200/300',
            'https://picsum.photos/seed/1ol922sV3t/200/300',
            'https://picsum.photos/seed/M3RyY41pn3/200/300'
        ]
    },
    {
        timestamp: '1704364579000',
        name: 'Toughjoyfax',
        eventUrl: 'https://tinyurl.com/integer.xml?sit=tristique&amet=fusce&erat=congue&nulla=diam&tempus=id&vivamus=ornare&in=imperdiet&felis=sapien&eu=urna&sapien=pretium&cursus=nisl&vestibulum=ut&proin=volutpat&eu=sapien&mi=arcu&nulla=sed&ac=augue&enim=aliquam&in=erat&tempor=volutpat&turpis=in&nec=congue&euismod=etiam&scelerisque=justo&quam=etiam&turpis=pretium&adipiscing=iaculis&lorem=justo&vitae=in&mattis=hac&nibh=habitasse&ligula=platea&nec=dictumst&sem=etiam&duis=faucibus&aliquam=cursus&convallis=urna&nunc=ut&proin=tellus&at=nulla&turpis=ut&a=erat&pede=id&posuere=mauris&nonummy=vulputate&integer=elementum&non=nullam&velit=varius&donec=nulla&diam=facilisi&neque=cras&vestibulum=non&eget=velit&vulputate=nec&ut=nisi&ultrices=vulputate&vel=nonummy&augue=maecenas&vestibulum=tincidunt&ante=lacus&ipsum=at&primis=velit&in=vivamus&faucibus=vel&orci=nulla&luctus=eget&et=eros&ultrices=elementum&posuere=pellentesque&cubilia=quisque&curae=porta&donec=volutpat&pharetra=erat&magna=quisque&vestibulum=erat&aliquet=eros&ultrices=viverra&erat=eget&tortor=congue&sollicitudin=eget&mi=semper&sit=rutrum&amet=nulla&lobortis=nunc&sapien=purus&sapien=phasellus&non=in&mi=felis&integer=donec&ac=semper&neque=sapien&duis=a&bibendum=libero',
        description: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n' +
            '\n' +
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
        imageUrls: [
            'https://picsum.photos/seed/12RaE02GAh/200/300',
            'https://picsum.photos/seed/7jDykiN1rt/200/300',
            'https://picsum.photos/seed/8y1U0sbu5I/200/300'
        ]
    },
    {
        timestamp: '1704222434000',
        name: 'Veribet',
        eventUrl: 'https://reuters.com/scelerisque/mauris/sit/amet/eros/suspendisse.png?nulla=aliquet&integer=pulvinar&pede=sed&justo=nisl&lacinia=nunc&eget=rhoncus&tincidunt=dui&eget=vel&tempus=sem&vel=sed&pede=sagittis&morbi=nam&porttitor=congue&lorem=risus&id=semper&ligula=porta&suspendisse=volutpat&ornare=quam&consequat=pede&lectus=lobortis&in=ligula&est=sit&risus=amet&auctor=eleifend&sed=pede&tristique=libero&in=quis&tempus=orci&sit=nullam&amet=molestie&sem=nibh&fusce=in',
        description: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
        imageUrls: [
            'https://picsum.photos/seed/aPh30Y3901/200/300',
            'https://picsum.photos/seed/W9Xj5NFjeC/200/300',
            'https://picsum.photos/seed/XOYI037pk1/200/300',
            'https://picsum.photos/seed/sU0YTP4Stg/200/300',
            'https://picsum.photos/seed/21dWmqKAEA/200/300',
            'https://picsum.photos/seed/Q6fK4z29j4/200/300'
        ]
    },
    {
        timestamp: '1699243023000',
        name: 'Daltfresh',
        eventUrl: 'https://cbslocal.com/ante/vel/ipsum.html?duis=suscipit&bibendum=ligula&felis=in&sed=lacus&interdum=curabitur&venenatis=at&turpis=ipsum&enim=ac&blandit=tellus&mi=semper&in=interdum&porttitor=mauris&pede=ullamcorper&justo=purus&eu=sit&massa=amet&donec=nulla',
        description: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n' +
            '\n' +
            'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        imageUrls: [
            'https://picsum.photos/seed/95LjnUWhUH/200/300',
            'https://picsum.photos/seed/e47X010eKa/200/300',
            'https://picsum.photos/seed/UgH40O7Eok/200/300',
            'https://picsum.photos/seed/MxrCYaw6Xp/200/300'
        ]
    },
    {
        timestamp: '1698730836000',
        name: 'Zontrax',
        eventUrl: 'https://nasa.gov/luctus.json?vestibulum=rutrum&quam=nulla&sapien=nunc&varius=purus&ut=phasellus&blandit=in&non=felis&interdum=donec&in=semper&ante=sapien&vestibulum=a&ante=libero&ipsum=nam&primis=dui&in=proin&faucibus=leo&orci=odio&luctus=porttitor&et=id&ultrices=consequat&posuere=in&cubilia=consequat&curae=ut&duis=nulla&faucibus=sed&accumsan=accumsan&odio=felis&curabitur=ut&convallis=at&duis=dolor&consequat=quis&dui=odio&nec=consequat&nisi=varius&volutpat=integer&eleifend=ac&donec=leo&ut=pellentesque&dolor=ultrices&morbi=mattis&vel=odio&lectus=donec&in=vitae&quam=nisi&fringilla=nam&rhoncus=ultrices&mauris=libero&enim=non&leo=mattis&rhoncus=pulvinar&sed=nulla&vestibulum=pede&sit=ullamcorper&amet=augue&cursus=a&id=suscipit&turpis=nulla&integer=elit&aliquet=ac&massa=nulla&id=sed&lobortis=vel&convallis=enim&tortor=sit&risus=amet&dapibus=nunc&augue=viverra&vel=dapibus&accumsan=nulla&tellus=suscipit&nisi=ligula&eu=in&orci=lacus',
        description: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n' +
            '\n' +
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        imageUrls: [
            'https://picsum.photos/seed/v2b8kf4G1i/200/300',
            'https://picsum.photos/seed/D8JfFt3HbE/200/300',
            'https://picsum.photos/seed/2764u25GYY/200/300'
        ]
    },
    {
        timestamp: '1693808845000',
        name: 'Span',
        eventUrl: 'https://usnews.com/congue/vivamus/metus/arcu.xml?orci=sed&luctus=nisl&et=nunc&ultrices=rhoncus&posuere=dui&cubilia=vel&curae=sem&donec=sed&pharetra=sagittis&magna=nam&vestibulum=congue&aliquet=risus&ultrices=semper&erat=porta&tortor=volutpat&sollicitudin=quam&mi=pede&sit=lobortis&amet=ligula&lobortis=sit&sapien=amet&sapien=eleifend&non=pede&mi=libero&integer=quis&ac=orci&neque=nullam&duis=molestie&bibendum=nibh&morbi=in&non=lectus&quam=pellentesque&nec=at&dui=nulla&luctus=suspendisse&rutrum=potenti&nulla=cras&tellus=in&in=purus&sagittis=eu&dui=magna&vel=vulputate&nisl=luctus&duis=cum&ac=sociis&nibh=natoque&fusce=penatibus&lacus=et&purus=magnis&aliquet=dis&at=parturient&feugiat=montes&non=nascetur&pretium=ridiculus&quis=mus&lectus=vivamus&suspendisse=vestibulum&potenti=sagittis&in=sapien&eleifend=cum&quam=sociis&a=natoque&odio=penatibus&in=et&hac=magnis&habitasse=dis&platea=parturient&dictumst=montes&maecenas=nascetur&ut=ridiculus&massa=mus&quis=etiam&augue=vel&luctus=augue&tincidunt=vestibulum&nulla=rutrum&mollis=rutrum&molestie=neque&lorem=aenean&quisque=auctor&ut=gravida&erat=sem&curabitur=praesent&gravida=id&nisi=massa&at=id&nibh=nisl&in=venenatis&hac=lacinia&habitasse=aenean&platea=sit&dictumst=amet&aliquam=justo&augue=morbi&quam=ut',
        description: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
            '\n' +
            'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        imageUrls: [
            'https://picsum.photos/seed/B91eo3ldz7/200/300',
            'https://picsum.photos/seed/ntJ16R3l48/200/300',
            'https://picsum.photos/seed/5Bu5cksl93/200/300',
            'https://picsum.photos/seed/JJ3jRztt23/200/300',
            'https://picsum.photos/seed/2f3WXn2iny/200/300'
        ]
    },
    {
        timestamp: '1677355232000',
        name: 'Sonsing',
        eventUrl: 'https://goo.ne.jp/non.jpg?diam=morbi&erat=porttitor&fermentum=lorem&justo=id&nec=ligula&condimentum=suspendisse&neque=ornare&sapien=consequat&placerat=lectus&ante=in&nulla=est&justo=risus&aliquam=auctor&quis=sed&turpis=tristique&eget=in&elit=tempus&sodales=sit&scelerisque=amet&mauris=sem&sit=fusce&amet=consequat&eros=nulla&suspendisse=nisl&accumsan=nunc&tortor=nisl&quis=duis&turpis=bibendum&sed=felis&ante=sed&vivamus=interdum&tortor=venenatis&duis=turpis&mattis=enim&egestas=blandit&metus=mi&aenean=in&fermentum=porttitor&donec=pede&ut=justo&mauris=eu&eget=massa&massa=donec&tempor=dapibus&convallis=duis&nulla=at&neque=velit&libero=eu&convallis=est&eget=congue&eleifend=elementum&luctus=in&ultricies=hac&eu=habitasse&nibh=platea&quisque=dictumst&id=morbi&justo=vestibulum&sit=velit&amet=id&sapien=pretium&dignissim=iaculis&vestibulum=diam&vestibulum=erat&ante=fermentum&ipsum=justo&primis=nec&in=condimentum&faucibus=neque&orci=sapien&luctus=placerat&et=ante&ultrices=nulla&posuere=justo&cubilia=aliquam&curae=quis&nulla=turpis&dapibus=eget&dolor=elit&vel=sodales&est=scelerisque&donec=mauris&odio=sit&justo=amet&sollicitudin=eros&ut=suspendisse&suscipit=accumsan&a=tortor&feugiat=quis&et=turpis&eros=sed&vestibulum=ante&ac=vivamus&est=tortor&lacinia=duis&nisi=mattis&venenatis=egestas&tristique=metus&fusce=aenean',
        description: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        imageUrls: [
            'https://picsum.photos/seed/w0zM88qgAs/200/300',
            'https://picsum.photos/seed/A7GssoyZIZ/200/300',
            'https://picsum.photos/seed/O8hApF11Ia/200/300',
            'https://picsum.photos/seed/4T3FY8UptV/200/300'
        ]
    },
    {
        timestamp: '1675985598000',
        name: 'Span',
        eventUrl: 'https://virginia.edu/nascetur/ridiculus/mus/etiam/vel/augue.html?nullam=eleifend&sit=donec&amet=ut&turpis=dolor&elementum=morbi&ligula=vel&vehicula=lectus&consequat=in&morbi=quam&a=fringilla',
        description: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n' +
            '\n' +
            'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        imageUrls: [
            'https://picsum.photos/seed/Y1fMrMfU0o/200/300',
            'https://picsum.photos/seed/J7i4enkm0S/200/300',
            'https://picsum.photos/seed/OPdG5pvjDU/200/300',
            'https://picsum.photos/seed/m3GN4b0vA9/200/300',
            'https://picsum.photos/seed/27yBm6TjLD/200/300',
            'https://picsum.photos/seed/9s0ngJqRU9/200/300'
        ]
    },
    {
        timestamp: '1675551525000',
        name: 'Tres-Zap',
        eventUrl: 'http://comcast.net/ut/mauris/eget/massa/tempor/convallis/nulla.jsp?velit=praesent&nec=id&nisi=massa&vulputate=id&nonummy=nisl&maecenas=venenatis&tincidunt=lacinia&lacus=aenean&at=sit&velit=amet&vivamus=justo&vel=morbi&nulla=ut&eget=odio&eros=cras&elementum=mi&pellentesque=pede&quisque=malesuada&porta=in&volutpat=imperdiet&erat=et&quisque=commodo&erat=vulputate&eros=justo&viverra=in&eget=blandit&congue=ultrices&eget=enim&semper=lorem&rutrum=ipsum&nulla=dolor&nunc=sit&purus=amet&phasellus=consectetuer&in=adipiscing&felis=elit&donec=proin&semper=interdum&sapien=mauris&a=non&libero=ligula&nam=pellentesque&dui=ultrices&proin=phasellus&leo=id&odio=sapien&porttitor=in&id=sapien&consequat=iaculis&in=congue&consequat=vivamus&ut=metus&nulla=arcu&sed=adipiscing&accumsan=molestie&felis=hendrerit&ut=at&at=vulputate&dolor=vitae&quis=nisl&odio=aenean&consequat=lectus&varius=pellentesque&integer=eget&ac=nunc&leo=donec&pellentesque=quis&ultrices=orci&mattis=eget&odio=orci&donec=vehicula&vitae=condimentum&nisi=curabitur&nam=in&ultrices=libero&libero=ut&non=massa&mattis=volutpat&pulvinar=convallis',
        description: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
        imageUrls: [
            'https://picsum.photos/seed/koLUO494ci/200/300',
            'https://picsum.photos/seed/A9LNEk0889/200/300',
            'https://picsum.photos/seed/qZblK7K8oK/200/300',
            'https://picsum.photos/seed/4n44DiLaSF/200/300',
            'https://picsum.photos/seed/NZ9L5E2606/200/300',
            'https://picsum.photos/seed/lLo1849t1D/200/300'
        ]
    }
]

const mapData = mockdata.map(i => ({
    title: new Date(Number(i.timestamp)).toDateString(),
    ...i
}))


export default function Events() {
    const [cardIndex, setCardIndex] = useState(0);
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        axios.get("/events")
            .then(res => res.data)
            .then(data => {
                setEventData(data.map(i => ({...i, title: new Date(i["eventDateTime"]).toDateString()})));
            });
    }, []);



    const onTimelineItemSelect = ({index}) => {
        setCardIndex(index);
    }

    return (
        <div className="eventSection">
            <h1>Events</h1>
            <div className="eventInfo">
                <div className="eventImage">
                    <img src={mapData[cardIndex].imageUrls[0]} alt="image"></img>
                </div>
            </div>
            <div className="eventsTimeline">
                <Chrono
                    mode={"HORIZONTAL"}
                    allowDynamicUpdate={true}
                    items={eventData}
                    cardPositionHorizontal={"TOP"}
                    cardLess={true}
                    // timelinePointShape={"square"}
                    timelinePointDimension={30}
                    onItemSelected={onTimelineItemSelect}
                />
            </div>
        </div>
    );
}