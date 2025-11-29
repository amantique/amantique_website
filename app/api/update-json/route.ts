import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { path, content } = await req.json();

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
  const OWNER = "amantique";
  const REPO = "amantique_website";
  const BRANCH = "master"; // ton repo utilise 'master'

  // 1. Récupérer le fichier existant (pour obtenir le SHA)
  const fileRes = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!fileRes.ok) {
    return NextResponse.json(
      { error: "Impossible de récupérer le fichier", status: fileRes.status },
      { status: 500 }
    );
  }

  const fileData = await fileRes.json();

  // 2. Encoder le contenu
  const newContentBase64 = Buffer.from(
    JSON.stringify(content, null, 2)
  ).toString("base64");

  // 3. Commit du fichier
  const commitRes = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Update ${path} from admin page`,
        content: newContentBase64,
        sha: fileData.sha,
        branch: BRANCH,
      }),
    }
  );

  const commitData = await commitRes.json();

  return NextResponse.json(commitData);
}
