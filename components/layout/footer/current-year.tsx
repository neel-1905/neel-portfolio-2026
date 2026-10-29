export function CurrentYear() {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-xs text-muted-foreground">
      © {currentYear} Neel Narwadkar - Full Stack Developer
    </p>
  );
}
