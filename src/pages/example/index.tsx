import { FitStack, FitText } from 'mui-material-components-tsdx';

const Example = () => {
    return (
        <FitStack
            sx={{ height: '100vh', bgcolor: 'primary.main' }}
            flex={1}
            flexShrink={1}
            justifyContent='center'
            alignItems='center'
        >
            <FitText sx={{ color: 'primary.contrastText' }} variant='h3'>
                Hi!
            </FitText>
            <FitText sx={{ color: 'primary.contrastText' }} variant='h4'>
                Hello World, this is an example page.
            </FitText>
            <FitText sx={{ color: 'primary.contrastText' }} variant='h5'>
                Here you can create your pages.
            </FitText>
        </FitStack>
    );
};

export default Example;
