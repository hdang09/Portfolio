interface ImageProps {
    src: string;
    alt: string;
    loading?: 'lazy' | 'eager';
    decoding?: 'async' | 'sync' | 'auto';
    className?: string;
}

const Image = ({ src, alt, loading = 'lazy', decoding = 'async', className }: ImageProps) => {
    return (
        <picture>
            <source type="image/webp" />
            <img src={src} alt={alt} loading={loading} decoding={decoding} className={className} />
        </picture>
    );
};

export default Image;
