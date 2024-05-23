import React, { useState, useEffect } from 'react';
const Scroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        document.title = `Scroll Position: ${position}`;
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const loremText = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ultrices arcu, a hendrerit sem vehicula ut. Sed bibendum quam et orci laoreet, eget ultrices justo ullamcorper. Nam sed magna eros. Nulla bibendum mi ac justo viverra, id viverra sapien viverra. Nullam non semper purus. Praesent id arcu vitae metus pellentesque fermentum a at lacus. Nam pellentesque bibendum turpis a suscipit. Proin cursus metus nec ante laoreet, ac feugiat neque bibendum. Vivamus suscipit mollis magna, at vehicula est hendrerit ac. Donec eget pharetra magna. Vestibulum scelerisque consequat facilisis. Aliquam erat volutpat. Mauris ac lacinia nunc, et tempor nisl. Nulla facilisi. Nullam nec odio nulla. Quisque viverra odio sit amet diam bibendum, in cursus eros sollicitudin.

        Morbi sagittis, neque eu ultricies sagittis, risus lacus interdum metus, eget volutpat metus dui sit amet orci. Nam imperdiet lectus a eros volutpat, eget dapibus est ullamcorper. Ut sed lectus leo. Nam tincidunt, mauris eu sodales egestas, leo arcu faucibus tortor, sit amet pharetra velit felis ac enim. Suspendisse euismod, sapien ac pharetra congue, eros felis dignissim erat, id tempus lorem tortor eget nunc. Duis ut eros ut orci dictum condimentum. Pellentesque nec purus velit. Curabitur ac interdum eros, sed auctor orci. Quisque mollis elit at erat vestibulum, non iaculis leo sodales. Nulla facilisi. Ut feugiat enim at erat sollicitudin laoreet. Curabitur non pharetra risus. Nulla facilisi. Mauris cursus sollicitudin felis, vitae dictum magna tincidunt id. Sed tristique vehicula urna, et venenatis lectus ullamcorper ut.

        Vestibulum vel nunc vitae turpis auctor aliquam. Integer non libero vel purus auctor ultrices. Aliquam maximus est in enim efficitur, et fermentum arcu hendrerit. Duis mollis enim sit amet mi blandit, sit amet efficitur ligula aliquam. Morbi ac turpis fringilla, scelerisque justo nec, pulvinar elit. Nam non orci vitae nulla elementum faucibus. Duis et risus felis. Phasellus id ornare augue, non malesuada enim. Phasellus dictum erat quis nunc luctus, sit amet viverra lorem aliquam. Mauris suscipit elementum magna, a tincidunt sapien volutpat eget. In ornare congue enim, nec sodales ipsum egestas sed. Nulla facilisi. Ut ut odio eu urna egestas elementum.

        Nullam non dui at felis fermentum pellentesque a sed lacus. Nam id magna non mi sollicitudin feugiat. Phasellus sit amet velit vel ante efficitur facilisis a nec augue. Integer id sapien id nunc eleifend sagittis. Nulla malesuada erat at augue ultrices, et tempus justo pulvinar. Suspendisse potenti. Suspendisse potenti. Sed tempor semper lacus, ut feugiat lectus rhoncus eget. Vivamus tincidunt magna vel ante cursus, non ullamcorper nulla scelerisque. Mauris pharetra, nunc at gravida tristique, felis ligula fermentum orci, non luctus magna erat eu nunc. Donec tristique ex id odio condimentum, et vulputate nisl ullamcorper. Donec venenatis condimentum risus, non aliquam mi. Fusce suscipit sapien eu nunc convallis, ac congue leo vehicula. Donec vehicula viverra ipsum ac consectetur. Aenean ut turpis non arcu vulputate consectetur. Curabitur maximus orci non nulla tempor laoreet.

        Cras ac metus odio. Vivamus nec ipsum ipsum. Donec fringilla lectus vel mi suscipit, et lacinia orci vestibulum. In vel ipsum eget eros ultricies fermentum sit amet in libero. Nulla fermentum, leo a tincidunt aliquet, lorem metus consequat quam, quis accumsan turpis augue ut lacus. Ut non turpis id dolor consectetur pharetra at a sapien. Cras in vehicula velit. Aliquam erat volutpat. Curabitur dignissim et nisi ut dignissim. Aenean quis ultricies felis. Nulla mollis tortor nulla, at aliquet velit tincidunt nec. Vivamus vestibulum est et leo blandit, non dignissim elit fermentum. Nullam ultricies odio non purus consequat, sed egestas risus egestas. Sed lacinia fermentum velit non ultricies. In sit amet lectus urna. Fusce vehicula nisl id tortor blandit, eget ullamcorper urna aliquam.
    `.repeat(50);
    return (
        <div>
            <h2>Scroll down to see the effect</h2>
            <p>{loremText}</p>
        </div>
    );
};
export default Scroll;
