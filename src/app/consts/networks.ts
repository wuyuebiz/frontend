export interface ISettings {
  specToken: string;
  specPool: string;
  specLpToken: string;
  gov: string;
  platform: string;
  warchest: string;
  wallet: string;
  mirrorFarm: string;
  mirrorStaking: string;
  mirrorGov: string;
  mirrorToken: string;
  specFarm: string;
  terraSwapFactory: string;
  terraSwapRouter: string;
  staker: string;
  anchorGov: string;
  anchorStaking: string;
  anchorToken: string;
  anchorFarm: string;
  pylonGov: string;
  pylonStaking: string;
  pylonToken: string;
  pylonFarm: string;
  terraworldGov: string;
  terraworldStaking: string;
  terraworldToken: string;
  terraworldFarm: string;
  valkyrieGov: string;
  valkyrieStaking: string;
  valkyrieToken: string;
  valkyrieFarm: string;
  nexusGov: string;
  nexusStaking: string;
  nexusToken: string;
  nexusFarm: string;
  nLunaPsiStaking: string;
  nLunaToken: string;
  nLunaPsiFarm: string;
  nEthPsiStaking: string;
  nEthToken: string;
  nEthPsiFarm: string;
  orionGov: string;
  orionStaking: string;
  orionToken: string;
  orionFarm: string;
  lcd: string;
  fcd: string;
  mirrorGraph: string;
  specAPI: string;
  anchorAPI: string;
  pylonAPI: string;
  valkyrieAPI: string;
  orionAPI: string;
  nexusGraph: string;
  chainID: string;
  finder: string;
}
export const networks: Record<string, ISettings> = {
  mainnet: {
    specToken: 'terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr',
    specPool: 'terra1tn8ejzw8kpuc87nu42f6qeyen4c7qy35tl8t20',
    specLpToken: 'terra1y9kxxm97vu4ex3uy0rgdr5h2vt7aze5sqx7jyl',
    gov: 'terra1dpe4fmcz2jqk6t50plw0gqa2q3he2tj6wex5cl',
    platform: 'terra1vvu80qnl0yn94stkc9sy2f5xcqcscu2fercgzq',
    warchest: 'terra14v8aeq4289fk7z08jvaw3qu3hers6whrdkqffp',
    wallet: 'terra1dretwqx84u229rjfgkp0j6avc3fusp000ejrz9',
    mirrorFarm: 'terra1kehar0l76kzuvrrcwj5um72u3pjq2uvp62aruf',
    mirrorStaking: 'terra17f7zu97865jmknk7p2glqvxzhduk78772ezac5',
    mirrorGov: 'terra1wh39swv7nq36pnefnupttm2nr96kz7jjddyt2x',
    mirrorToken: 'terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6',
    specFarm: 'terra17hjvrkcwn3jk2qf69s5ldxx5rjccchu35assga',
    terraSwapFactory: 'terra1ulgw0td86nvs4wtpsc80thv6xelk76ut7a7apj',
    terraSwapRouter: 'terra19qx5xe6q9ll4w0890ux7lv2p4mf3csd4qvt3ex',
    staker: 'terra1fxwelge6mf5l6z0rjpylzcfq9w9tw2q7tewaf5',
    anchorGov: 'terra1f32xyep306hhcxxxf7mlyh0ucggc00rm2s9da5',
    anchorStaking: 'terra1897an2xux840p9lrh6py3ryankc6mspw49xse3',
    anchorToken: 'terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
    anchorFarm: 'terra1fqzczuddqsdml37a20pysjx5wk9dh4tdzu2mrw',
    pylonGov: 'terra1xu8utj38xuw6mjwck4n97enmavlv852zkcvhgp',
    pylonStaking: 'terra19nek85kaqrvzlxygw20jhy08h3ryjf5kg4ep3l',
    pylonToken: 'terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy',
    pylonFarm: 'terra1r3675psl7s2fe0sfh0vut5z4hrywgyyfdrzg95',
    terraworldGov: 'terra1l709gpyzpwukpq3g55j7n8kqyzataxlg4swg96',
    terraworldStaking: 'terra10eyxljyqkcvhs4dgr534hk0wehc28tz6gwnh8a',
    terraworldToken: 'terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6',
    terraworldFarm: 'terra1cdyw7fydevn372re7xjgfh8kqrrf2lxm5k6ve3',
    valkyrieGov: 'terra1w6xf64nlmy3fevmmypx6w2fa34ue74hlye3chk',
    valkyrieStaking: 'terra1ude6ggsvwrhefw2dqjh4j6r7fdmu9nk6nf2z32',
    valkyrieToken: 'terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5',
    valkyrieFarm: 'terra1xt4ugaxds6wjehjckqchzg4e99n3cjd2rtfw4f',
    nexusGov: 'terra1xrk6v2tfjrhjz2dsfecj40ps7ayanjx970gy0j',
    nexusStaking: 'terra12kzewegufqprmzl20nhsuwjjq6xu8t8ppzt30a',
    nexusToken: 'terra12897djskt9rge8dtmm86w654g7kzckkd698608',
    nexusFarm: 'terra1j2hdp4jelqe9tkfwnsx5mlheqagaryxhqwr4h2',
    nLunaPsiStaking: 'terra1hs4ev0ghwn4wr888jwm56eztfpau6rjcd8mczc',
    nLunaToken: 'terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j', // nLunaPsiLP: 'terra1tuw46dwfvahpcwf3ulempzsn9a0vhazut87zec'
    nLunaPsiFarm: '',
    nEthPsiStaking: 'terra1lws09x0slx892ux526d6atwwgdxnjg58uan8ph', // nEthPsiLP: 'terra1y8kxhfg22px5er32ctsgjvayaj8q36tr590qtp'
    nEthToken: 'terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn',
    nEthPsiFarm: '',
    orionGov: '',
    orionStaking: 'terra1q8q6y03452e44pztw8kr8zcdkjtxuz8vq9t8uq',
    orionToken: 'terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03', // orionLP terra14ffp0waxcck733a9jfd58d86h9rac2chf5xhev
    orionFarm: '',
    lcd: 'https://lcd.terra.dev',
    fcd: 'https://fcd.terra.dev',
    mirrorGraph: 'mirror',
    specAPI: 'https://specapi.azurefd.net/api',
    anchorAPI: 'https://api.anchorprotocol.com/api/v2',
    pylonAPI: 'https://api.pylon.money',
    valkyrieAPI: 'https://api.valkyrieprotocol.com',
    orionAPI: 'https://api.orion.money/v1/terra',
    nexusGraph: 'nexus',
    chainID: 'columbus-5',
    finder: 'finder.extraterrestrial.money',
  },
  testnet: {
    specToken: 'terra1kvsxd94ue6f4rtchv2l6me5k07uh26s7637cza',
    specPool: 'terra15cjce08zcmempedxwtce2y44y2ayup8gww3txr',
    specLpToken: 'terra1ntt4mdhr9lukayenntgltqppw4yy6hts7wr67d',
    gov: 'terra1x3l2tkkwzzr0qsnrpy3lf2cm005zxv7pun26x4',
    platform: 'terra10h22vx3kp8wxdkuhypmwnjr4wrurcup5pk9uq9',
    warchest: 'terra1ulpamdq7lsg5hu0hzvl4skxt0ahtxs0enyu96e',
    wallet: 'terra1u4kg5h8zrwvtr30h2hwhnj64ekml4uar65plvm',
    mirrorFarm: 'terra1hasdl7l6xtegnch8mjyw2g7mfh9nt3gtdtmpfu',
    mirrorStaking: 'terra1a06dgl27rhujjphsn4drl242ufws267qxypptx',
    mirrorGov: 'terra12r5ghc6ppewcdcs3hkewrz24ey6xl7mmpk478s',
    mirrorToken: 'terra10llyp6v3j3her8u3ce66ragytu45kcmd9asj3u',
    specFarm: 'terra1cedx8gpvu7c4vzfadwmf3pewg2030fqgw4q3dl',
    terraSwapFactory: 'terra18qpjm4zkvqnpjpw0zn0tdr8gdzvt8au35v45xf',
    terraSwapRouter: 'terra14z80rwpd0alzj4xdtgqdmcqt9wd9xj5ffd60wp',
    staker: 'terra16mr4m8phfnhdlvqatc59w536aly9fpdvz9dtvv',
    anchorGov: 'terra16ckeuu7c6ggu52a8se005mg5c0kd2kmuun63cu',
    anchorStaking: 'terra19nxz35c8f7t3ghdxrxherym20tux8eccar0c3k',
    anchorToken: 'terra1747mad58h0w4y589y3sk84r5efqdev9q4r02pc',
    anchorFarm: 'terra1yvpd3j7mry7qrmmn2x9vapmr9qpzkvjgs4f7z7',
    pylonGov: 'terra1hffjqjscxgz5lnmmtwhksrcg4gd3x4nyp9mzwx',
    pylonStaking: 'terra17av0lfhqymusm6j9jpepzerg6u54q57jp7xnrz',
    pylonToken: 'terra1lqm5tutr5xcw9d5vc4457exa3ghd4sr9mzwdex',
    pylonFarm: 'terra1hgjp2yjqe7ngzsx283tm7ch8xcsvk5c8mdj2tw',
    terraworldGov: 'terra1k7tsz2m2hnutx074gcwk9dtaxd88pywm6t8qul',
    terraworldStaking: 'terra155yqhchyvfkxz5tas07kvprx77wnla7stexhs7',
    terraworldToken: 'terra1pe803vgyesmqr73j3l4732hmg2v6ss374aagx4',
    terraworldFarm: 'terra19w0a2xv7vyj8yze3fxzk55nfl5nlvc0l67uduu',
    valkyrieGov: 'terra102jsr0c2d5nhaa8vmjw0nerphw0s2cs70tz9a3',
    valkyrieStaking: 'terra1pemp0pyupazlfye0cuxn0cz93mu02p8m5uep3k',
    valkyrieToken: 'terra1a8hskrwnccq0v7gq3n24nraaqt7yevzy005uf5',
    valkyrieFarm: 'terra15u4nuq7jchdzklpeqzazxs09cylgndqc37tvhg',
    nexusGov: 'terra1u7tnl4326ge86mzqeqnzxxjg7xkgj8nfg65a2h',
    nexusStaking: 'terra1qsc7y8448payj9fyjxn6ffxxmdcj5g5dtptfq2',
    nexusToken: 'terra18nle009rtynpjgleh2975rleu5zts0zdtqryte',
    nexusFarm: 'terra158j75d7kml99u3r4xy4e7xnfzmhm2j780e5npl',
    nLunaPsiStaking: 'terra14r89lj2e87qz2vwmdjxs70khh89n3w2xy2zkgn',
    nLunaToken: 'terra1gzq2zd4skvnvgm2z48fdp0mxy2djmtk7sz4uhe', // nLunaPsiLP: 'terra1a7awn36j2yy7jvy8te72rwrhl6zma3yugtrhm5'
    nLunaPsiFarm: 'terra1jssrzhcr2qdm53qucw6ty35wddyhea8nvwwq4a',
    nEthPsiStaking: 'terra1u8gvskrt5n6vdeeuc4428pxhjh75h0jcntm7ca',
    nEthToken: 'terra1em8dvzln8quptj9tuptf8tu73jyuv5jn6kqdwv', // nEthPsiLP: 'terra1y2r544tw2q4cgpgjvts8uu6gekk9kwz047a9sl'
    nEthPsiFarm: 'terra1nvgz56np9kytg4xx8xmd85yqfjh50p39wua2yg',
    orionGov: 'terra1xamqmmllxwhenagfn57753w9hqdhck43dzwj94',
    orionStaking: 'terra1jz22ws2yhlm6zycz7eluqptjn2t74fw4g82v8j',
    orionToken: 'terra13qdskca8xavmed88htplse0z396tesgh63tn9r', // orionLP terra1qvmf8jf3a7h6lgglw29f8nvcckn7t8z0hqgma5
    orionFarm: 'terra1mset93yy46n8lwy59gadcmekxspnf3zldzsc0x',
    lcd: 'https://bombay-lcd.terra.dev',
    fcd: 'https://bombay-fcd.terra.dev',
    mirrorGraph: 'mirrorTest',
    specAPI: 'https://testapi.spec.finance/api',
    anchorAPI: 'https://api.anchorprotocol.com/api/v2',
    pylonAPI: 'https://api.dev.pylon.rocks',
    valkyrieAPI: 'https://api.testnet.valkyrieprotocol.com',
    orionAPI: 'https://api.stage.orion.money/v1/terra',
    nexusGraph: 'nexus',
    chainID: 'bombay-12',
    finder: 'finder.terra.money',
  },
};
