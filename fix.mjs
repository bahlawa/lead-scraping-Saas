import { promises as fs } from 'fs';
import path from 'path';

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = await fs.readFile(fullPath, 'utf8');
      
      // Replace next imports
      content = content.replace(/import Link from ["']next\/link["'];?/g, "import { Link } from 'react-router-dom';");
      content = content.replace(/import \{ useRouter \} from ["']next\/navigation["'];?/g, "import { useNavigate } from 'react-router-dom';");
      content = content.replace(/import \{ usePathname \} from ["']next\/navigation["'];?/g, "import { useLocation } from 'react-router-dom';");
      
      // Replace hooks
      content = content.replace(/const router = useRouter\(\);?/g, "const navigate = useNavigate();");
      content = content.replace(/router\.push\(/g, "navigate(");
      content = content.replace(/const pathname = usePathname\(\);?/g, "const location = useLocation();\n  const pathname = location.pathname;");
      
      // Replace Link href
      content = content.replace(/<Link\s+([^>]*?)href=/g, "<Link $1to=");
      
      // Replace Image (if any)
      content = content.replace(/import Image from ["']next\/image["'];?/g, "");
      content = content.replace(/<Image\s+([^>]*?)src=/g, "<img $1src=");
      
      await fs.writeFile(fullPath, content, 'utf8');
    }
  }
}

processDirectory(path.join(process.cwd(), 'src')).catch(console.error);
