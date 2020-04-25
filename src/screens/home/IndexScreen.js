import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Platform, Dimensions, FlatList, TouchableWithoutFeedback } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BaseComponent from '../../components/BaseComponent';
import walletImage from './../../assets/images/wallet.png';
import { ButtonIconText, ButtonCircleIcon } from './../../components/ButtonComponent';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import { ProductListItem } from './../../components/ListItemComponent';
import { TextBold } from './../../components/TextComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { ModalPopUpFromBottom } from '../../components/ModalComponent';

import payIcon from './../../assets/images/pay.png';
import creditIcon from './../../assets/images/credit.png';
import topUpIcon from './../../assets/images/top_up.png';
import moreIcon from './../../assets/images/more.png';
import foodIcon from './../../assets/images/food.png';
import beautyIcon from './../../assets/images/beauty.png';
import supplementIcon from './../../assets/images/supplement.png';
import bundleIcon from './../../assets/images/bundle.png';
import imageCarousel1 from './../../assets/images/imageCarousel1.jpeg';
import imageCarousel2 from './../../assets/images/imageCarousel2.jpeg';
import imageCarousel3 from './../../assets/images/imageCarousel3.jpeg';
import imageCarousel4 from './../../assets/images/imageCarousel4.jpeg';
import imageCarousel5 from './../../assets/images/imageCarousel5.jpeg';
import imageCarousel6 from './../../assets/images/imageCarousel6.jpeg';
import imageCarousel7 from './../../assets/images/imageCarousel7.jpeg';
import imageCarousel8 from './../../assets/images/imageCarousel8.jpeg';
import imageCarousel9 from './../../assets/images/imageCarousel9.jpeg';
import imageCarousel10 from './../../assets/images/imageCarousel10.jpeg';
import imageProduct1 from './../../assets/images/imageProduk1.png';
import imageProduct2 from './../../assets/images/imageProduk2.png';
import imageProduct3 from './../../assets/images/imageProduk3.png';
import imageProduct4 from './../../assets/images/imageProduk4.png';
import imageNewLemonilo1 from './../../assets/images/imageNewLemonilo1.png';
import imageNewLemonilo2 from './../../assets/images/imageNewLemonilo2.png';
import imageNewLemonilo3 from './../../assets/images/imageNewLemonilo3.png';
import imageNewLemonilo4 from './../../assets/images/imageNewLemonilo4.png';
import historyIcon from './../../assets/images/history.png';
import manfaatProductIcon from './../../assets/images/manfaat_product.png';
import promoIcon from './../../assets/images/promo.png';
import missionIcon from './../../assets/images/mission.png';
import withdrawIcon from './../../assets/images/withdraw.png';
import billingIcon from './../../assets/images/billing.png';
import helpIcon from './../../assets/images/help.png';
import storeIcon from './../../assets/images/store.png';


class IndexScreen extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            activeSlide: 0,
            openMoreModal: false,
        }
    }

    _renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={{ width: '90%', alignSelf: 'center', height: wp(23) }}>
                <ParallaxImage source={item.image} parallaxFactor={0.7}
                    style={styles.carouselImageStyle} containerStyle={{ flex: 1 }}  {...parallaxProps} />
            </View>
        )
    }

    render() {

        const productData = [
            { label: 'Lemonilo Bumbu Penyedap Segala (All Purpose Seasoning)', image: imageProduct1, weight: '55 gr', cashback: null, price: 17500, rate: 100, totalRate: 1 },
            { label: 'Paket Sembako Sehat 2', image: imageProduct2, weight: '2000 gr', cashback: 22, price: 200200, rate: 100, totalRate: 2 },
            { label: 'Naturizer Hand Sanitizer by Lemonilo', image: imageProduct3, weight: '30 ml', cashback: 15, price: 20000, rate: 96, totalRate: 507 },
            { label: 'Paket 1- Belanja 50ribuan GRATIS masker Kain', image: imageProduct4, weight: '550 gr', cashback: null, price: 51000, rate: 90, totalRate: 2 },
        ]
        const newLemoniLoData = [
            { label: 'Paket 4 - Belanja 50ribuan Lemonilo Bumbu Penyedap Segala GRATIS Masker Kain', image: imageNewLemonilo1, weight: '165 gr', cashback: null, price: 52500, rate: 0, totalRate: 0 },
            { label: 'BUY 20 Lemonilo Mi Instan Kuah Rasa Kari Ayam FREE 2 Masker Kain', image: imageNewLemonilo2, weight: '1400 gr', cashback: 2, price: 12400, rate: 0, totalRate: 0 },
            { label: 'BUY 10 Lemonilo Mi Instan Kuah Rasa Kari Ayam FREE Masker Kain', image: imageNewLemonilo3, weight: '700 gr', cashback: 2, price: 62000, rate: 0, totalRate: 0 },
            { label: 'BUY 20 Lemonilo Mi Instan Kuah Rasa Ayam Bawang FREE 2 Masker Kain', image: imageNewLemonilo4, weight: '1500 gr', cashback: 2, price: 124000, rate: 0, totalRate: 0 },
        ]

        const { containerStyle, containerMainMenu, containerHeaderMainMenu, containerBodyMainMenu,
            textLemoniloStyle, containerSecondaryMenu, textCommonMargin, containerSubText } = styles

        const carouselImageData = [{ image: imageCarousel1 }, { image: imageCarousel2 }, { image: imageCarousel3 }, { image: imageCarousel4 }, { image: imageCarousel5 }
            , { image: imageCarousel6 }, { image: imageCarousel7 }, { image: imageCarousel8 }, { image: imageCarousel9 }, { image: imageCarousel10 }]
        const { activeSlide, openMoreModal } = this.state
        console.log(Dimensions.get('window').width)
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View>
                        <View style={containerStyle}>
                            <View style={containerMainMenu}>
                                <View style={containerHeaderMainMenu} >
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Image source={walletImage} style={{ width: wp(4), height: wp(4) }} />
                                        <Text style={textLemoniloStyle}>Lemonilo</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <TextBold style={[textLemoniloStyle, { textAlign: 'right' }]}>Rp235.000</TextBold>
                                    </View>
                                </View>
                                <View style={containerBodyMainMenu}>
                                    <ButtonIconText icon={payIcon} label='Pay' />
                                    <ButtonIconText icon={creditIcon} label='Credit' />
                                    <ButtonIconText icon={topUpIcon} label='Top Up' />
                                    <ButtonIconText icon={moreIcon} label='More' onPress={() => this.setState({ openMoreModal: true })} />
                                </View>
                            </View>
                            <View style={containerSecondaryMenu}>
                                <ButtonCircleIcon label='Food' icon={foodIcon} />
                                <ButtonCircleIcon label='Beauty & Body' icon={beautyIcon} />
                                <ButtonCircleIcon label='Supplement' icon={supplementIcon} />
                                <ButtonCircleIcon label='Bundles' icon={bundleIcon} />
                            </View>
                        </View>
                        <View>
                            <TextBold style={[textCommonMargin, { fontSize: 18 }]}>Information for you</TextBold>
                            <Carousel
                                data={carouselImageData}
                                renderItem={this._renderItem}
                                autoplay={true}
                                autoplayInterval={10000}
                                loop={true}
                                enableSnap={true}
                                enableMomentum={false}
                                lockScrollWhileSnapping={true}
                                sliderWidth={Dimensions.get('window').width}
                                itemWidth={Dimensions.get('window').width}
                                hasParallaxImages={true}
                                onSnapToItem={(index) => this.setState({ activeSlide: index })} />
                            <View style={{ marginTop: Platform.OS === 'ios' ? -wp(10) : -wp(11) }}>
                                <Pagination
                                    dotsLength={carouselImageData.length}
                                    activeDotIndex={activeSlide}
                                    dotStyle={{
                                        width: 5,
                                        height: 5,
                                        borderRadius: 5,
                                        backgroundColor: '#25ba60'
                                    }}
                                    inactiveDotStyle={{
                                        marginVertical: 1,
                                        backgroundColor: '#92a58c'
                                    }}
                                    inactiveDotOpacity={0.4}
                                    inactiveDotScale={0.6}
                                />
                            </View>
                            <View >
                                <View style={containerSubText}>
                                    <TextBold style={[{ fontSize: 14 }]}>Produk pilihan Lemonilo</TextBold>
                                    <TouchableWithoutFeedback >
                                        <Text style={{ color: 'blue' }}>View All</Text>
                                    </TouchableWithoutFeedback>
                                </View>
                                <FlatList
                                    data={productData}
                                    horizontal={true}
                                    keyExtractor={(item, index) => index}
                                    renderItem={({ item }) => <ProductListItem label={item.label} image={item.image} price={item.price}
                                        weight={item.weight} cashback={item.cashback} rate={item.rate} totalRate={item.totalRate} />} />
                            </View>
                            <View >
                                <View style={containerSubText}>
                                    <TextBold style={[{ fontSize: 14 }]}>Terbaru Di Lemonilo</TextBold>
                                    <TouchableWithoutFeedback >
                                        <Text style={{ color: 'blue' }}>View All</Text>
                                    </TouchableWithoutFeedback>
                                </View>
                                <FlatList
                                    data={newLemoniLoData}
                                    horizontal={true}
                                    keyExtractor={(item, index) => index}
                                    renderItem={({ item }) => <ProductListItem label={item.label} image={item.image} price={item.price}
                                        weight={item.weight} cashback={item.cashback} rate={item.rate} totalRate={item.totalRate} />} />
                            </View>
                        </View>
                    </View>
                    <ModalPopUpFromBottom visible={openMoreModal} onClose={() => this.setState({ openMoreModal: false })} >
                        <ScrollView>
                            <View style={[containerBodyMainMenu, { backgroundColor: 'white' }]}>
                                <ButtonIconText icon={missionIcon} label='Mission' extraStyleText={{ color: '#78c02f' }} />
                                <ButtonIconText icon={historyIcon} label='History' extraStyleText={{ color: '#78c02f' }} />
                                <ButtonIconText icon={manfaatProductIcon} label='Manfaat Produk' extraStyleText={{ color: '#78c02f' }} />
                                <ButtonIconText icon={withdrawIcon} label='Withdraw' extraStyleText={{ color: '#78c02f' }} />
                            </View>
                            <View style={[containerBodyMainMenu, { backgroundColor: 'white' }]}>
                                <ButtonIconText icon={billingIcon} label='Billing' extraStyleText={{ color: '#78c02f' }} />
                                <ButtonIconText icon={storeIcon} label='Store' extraStyleText={{ color: '#78c02f' }} />
                                <ButtonIconText icon={promoIcon} label='Promo' extraStyleText={{ color: '#78c02f' }} />
                                <ButtonIconText icon={helpIcon} label='Help' extraStyleText={{ color: '#78c02f' }} />
                            </View>
                        </ScrollView>
                    </ModalPopUpFromBottom>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        padding: wp(5)
    },
    containerMainMenu: {
        width: '100%',
        height: wp(28),
    },
    containerHeaderMainMenu: {
        backgroundColor: '#78c02f',
        width: '100%',
        flex: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        paddingTop: wp(2),
        paddingHorizontal: wp(4),
        flexDirection: 'row'
    },
    containerBodyMainMenu: {
        backgroundColor: '#b7d335',
        width: '100%',
        flex: 3,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingHorizontal: wp(8),
        paddingVertical: wp(2.5),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textLemoniloStyle: {
        marginLeft: wp(1),
        color: '#ffff',
        marginTop: Platform.OS === "ios" ? 0 : -wp(1)
    },
    containerSecondaryMenu: {
        paddingVertical: wp(5),
        paddingHorizontal: wp(3),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    carouselImageStyle: {
        resizeMode: 'contain',
        ...StyleSheet.absoluteFillObject
    },
    containerSubText: {
        flexDirection: 'row',
        width: wp(90),
        justifyContent: 'space-between',
        marginHorizontal: wp(5),
        marginBottom: wp(2)
    },
    textCommonMargin: {
        fontSize: 14,
        marginLeft: wp(5),
        marginBottom: wp(2)
    }
})

export default IndexScreen;