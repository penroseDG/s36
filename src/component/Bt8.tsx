import React from 'react';

const Season = () => {
    const month = new Date().getMonth() + 1; // getMonth() trả về 0-11, nên cộng thêm 1 để có 1-12
    let season;
    if (month >= 1 && month <= 3) {
        season = 'Xuân';
    } else if (month >= 4 && month <= 6) {
        season = 'Hạ';
    } else if (month >= 7 && month <= 9) {
        season = 'Thu';
    } else if (month >= 10 && month <= 12) {
        season = 'Đông';
    }
    return (
        <div>
            <h2>Mùa hiện tại</h2>
            <p>Bây giờ là mùa {season}</p>
        </div>
    );
};

export default Season;
