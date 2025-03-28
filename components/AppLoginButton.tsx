import Link from 'next/link';
import { Button } from './ui/button';

export default function AppLoginButton() {
    return (
        <Button asChild>
            <Link href='https://app.zenetics.io'>Launch ZENETICS</Link>
        </Button>
    );
}
