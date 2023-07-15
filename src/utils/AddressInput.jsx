import React from 'react';
import { useField, ErrorMessage } from 'formik';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const AddressInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = (address) => {
    helpers.setValue(address);
  };

  const handleSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      // Access the latitude and longitude values as latLng.lat and latLng.lng
      console.log('Latitude:', latLng.lat);
      console.log('Longitude:', latLng.lng);

      helpers.setValue(address);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <PlacesAutocomplete value={field.value} onChange={handleChange} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Type address' })} />
            <div>
              {loading ? <div>Loading...</div> : null}

              {suggestions.map((suggestion, index) => (
                <div key={index} {...getSuggestionItemProps(suggestion)}>
                  {suggestion.description}
                </div>
              ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <ErrorMessage name={field.name} component="div" />
    </div>
  );
};

export default AddressInput;
