import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  value: {
    marginBottom: 5,
    fontSize: 14,
    textAlign: 'justify',
    textIndent: 20,
  },
  signature: {
    width: 150,
    height: 50,
  },
  underline: {
    textDecoration: 'underline',
    fontSize: 14,
    textAlign: 'justify',
  },
  flex: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
});
