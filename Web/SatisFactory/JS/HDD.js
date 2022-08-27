module.exports = {
    HDD : [
            {
                item : '주조된 나사',
                english : 'Cast Screw',
                img : 'CastScrew.png',
                origin_target : '제작기',
                alter_target : '제작기',
                origin_cost : [
                    '철봉 10개',
                ],
                alter_cost : [
                    '철 주괴 12.5개',
                ],
                origin_product : 40,
                alter_product : 50,
                efficiency : '+25%',
                isGoodEfficiency : true,
            },

            {
                item : '순수한 카테리움 주괴',
                english : 'Pure Caterium Ingot',
                img : 'PureCateriumIngot.png',
                origin_target : '제련기',
                alter_target : '정제소',
                origin_cost : [
                    '카테리움 광석 45개',
                ],
                alter_cost : [
                    '카테리움 광석 24개',
                    '물 24m^2',
                ],
                origin_product : 15,
                alter_product : 12,
                efficiency : '-20%',
                isGoodEfficiency : false,
            },

            {
                item : '순수한 석영 수정',
                english : 'Pure Quartz Crystal',
                img : 'PureQuartzCrystal.png',
                origin_target : '제작기',
                alter_target : '제작기',
                origin_cost : [
                    '석영 원석 37.5개',
                ],
                alter_cost : [
                    '석영 원석 67.5개',
                    '물 37.5m^2'
                ],
                origin_product : 22.5,
                alter_product : 52.5,
                efficiency : '+133.33%',
                isGoodEfficiency : true,
            },

            {
                item : '단단한 강철 주괴',
                english : 'Solid Steel Ingot',
                img : 'SolidSteelIngot.png',
                origin_target : '주조소',
                alter_target : '주조소',
                origin_cost : [
                    '철 광석 45개',
                    '석탄 45개',
                ],
                alter_cost : [
                    '철 주괴 40개',
                    '석탄 40개'
                ],
                origin_product : 45,
                alter_product : 60,
                efficiency : '+33.33%',
                isGoodEfficiency : true,
            },
    ]
}
