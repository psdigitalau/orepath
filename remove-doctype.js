// Removes all <!doctype html> from partials
export default function removeDoctype() {
  return {
    name: 'remove-doctype',
    transform(code, id) {
      if (id.includes('/partials/') && id.endsWith('.html')) {
        return {
          code: code.replace(/<!doctype html>\s*/i, ''),
          map: null,
        };
      }
      return { code, map: null };
    },
  };
}
