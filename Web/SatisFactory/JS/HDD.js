module.exports = {
    HDD : [
        {
            item : '강철 회전자',
            english : 'Steel Rotor',
            img : 'SteelRotor.png',
            origin_target : '조립기',
            alter_target : '조립기',
            origin_cost : [
                '철봉 20개',
                '나사 100개',
            ],
            alter_cost : [
                '강철 파이프 10개',
                '전선 30개'
            ],
            origin_product : 5,
            alter_product : 4,
            efficiency : '+25%',
            isGoodEfficiency : true,
        },
        {
            item : '포장된 산업용 파이프',
            english : 'Encased Industrial Pipe',
            img : 'EncasedIndustrialPipe.png',
            origin_target : '조립기',
            alter_target : '조립기',
            origin_cost : [
                '강철 빔 24개',
                '콘크리트 30개',
            ],
            alter_cost : [
                '강철 파이프 28개',
                '콘크리트 20개'
            ],
            origin_product : 4,
            alter_product : 6,
            efficiency : '-33.33%',
            isGoodEfficiency : false,
        },
        {
            item : '구리 합금 주괴',
            english : 'Copper Alloy Ingot',
            img : 'CopperAlloyIngot.png',
            origin_target : '제련기',
            alter_target : '주조소',
            origin_cost : [
                '구리 광석 30개',
            ],
            alter_cost : [
                '구리 광석 50개',
                '철 광석 25개'
            ],
            origin_product : 30,
            alter_product : 100,
            efficiency : '+233.33%',
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
        {
            item : '순수한 석영 수정',
            english : 'Pure Quartz Crystal',
            img : 'PureQuartzCrystal.png',
            origin_target : '제작기',
            alter_target : '정제소',
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
    ]
}
