const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    This is my footer ❤️
                </li>
                <li>
                    <a href="https://github.com/Shadowsdepth" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'gray', cursor: 'not-allowed' }}>
                        LinkedIn (N/A)
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'gray', cursor: 'not-allowed' }}>
                        Stack Overflow (N/A)
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
